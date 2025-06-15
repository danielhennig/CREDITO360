// server-score.js

import express from 'express';
import cors from 'cors';
import * as tf from '@tensorflow/tfjs';
import { randomNormal } from '@tensorflow/tfjs';

// ============================================================================
// 1) Auxiliares de data e peso de recência
// ============================================================================

function parseISODate(str) {
  return new Date(str + 'T00:00:00Z');
}

function daysBetween(dateNew, dateOld) {
  return Math.floor((dateNew - dateOld) / (1000 * 60 * 60 * 24));
}

function recencyWeight(txDate, referenceDate, windowDays = 180) {
  const diff = daysBetween(referenceDate, txDate);
  let w = 1 - diff / windowDays;
  if (w < 0) w = 0;
  if (w > 1) w = 1;
  return w;
}

// ============================================================================
// 2) Geração de dados sintéticos para treino
// ============================================================================

function generateSyntheticTransactions(
  numClients,
  maxTxPerClient = 60,
  startStr = '2024-01-01',
  endStr = '2025-05-31'
) {
  const startDate = parseISODate(startStr);
  const endDate = parseISODate(endStr);
  const totalDays = daysBetween(endDate, startDate);

  const rows = [];
  for (let cid = 0; cid < numClients; cid++) {
    const nTx = Math.floor(Math.random() * (maxTxPerClient - 10)) + 10;
    for (let i = 0; i < nTx; i++) {
      const randDay = Math.floor(Math.random() * (totalDays + 1));
      const txDate = new Date(startDate.getTime() + randDay * 24 * 60 * 60 * 1000);
      const gauss = randomNormal([1], 0, 500).arraySync()[0];
      const amt = gauss >= 0 ? gauss + 10 : gauss - 10;
      if (Math.random() < 0.5) {
        rows.push({ client_id: cid, deposit: Math.abs(amt), withdrawal: 0, date: txDate.toISOString().slice(0, 10) });
      } else {
        rows.push({ client_id: cid, deposit: 0, withdrawal: Math.abs(amt), date: txDate.toISOString().slice(0, 10) });
      }
    }
  }
  return rows;
}

function consolidateFeatures(
  transactions,
  referenceDate = '2025-06-01',
  windowDays = 180
) {
  const refDate = parseISODate(referenceDate);
  const featureMap = new Map();

  for (const tx of transactions) {
    const cid = tx.client_id;
    const dep = tx.deposit;
    const wit = tx.withdrawal;
    const txDate = parseISODate(tx.date);
    const w = recencyWeight(txDate, refDate, windowDays);

    if (!featureMap.has(cid)) {
      featureMap.set(cid, { total_balance: 0, weighted_deposit: 0, weighted_withdrawal: 0 });
    }
    const obj = featureMap.get(cid);
    obj.total_balance += dep - wit;
    obj.weighted_deposit += dep * w;
    obj.weighted_withdrawal += wit * w;
  }

  const features = [];
  for (const [cid, vals] of featureMap.entries()) {
    features.push({
      client_id: cid,
      total_balance: vals.total_balance,
      weighted_deposit: vals.weighted_deposit,
      weighted_withdrawal: vals.weighted_withdrawal
    });
  }
  return features;
}

// ============================================================================
// 3) Geração de scores sintéticos de 300 a 1000
// ============================================================================

function generateSyntheticScore(features) {
  const wBal = 0.40, wDep = 0.35, wWit = 0.25;
  return features.map(row => {
    const nb = Math.min(Math.max(row.total_balance / 10000, 0), 1);
    const nd = Math.min(Math.max(row.weighted_deposit / 5000, 0), 1);
    const nw = Math.min(Math.max(row.weighted_withdrawal / 5000, 0), 1);
    let scoreNorm = Math.min(Math.max(nb * wBal + nd * wDep - nw * wWit, 0), 1);
    const base = 300 + scoreNorm * 700;  // escala de 300–1000
    const noise = randomNormal([1], 0, 20).arraySync()[0];
    const raw = base + noise;
    return Math.round(Math.min(Math.max(raw, 300), 1000));
  });
}

// ============================================================================
// 4) Normalização e feature-extraction para inferência
// ============================================================================

function normalizeFeaturesRaw(tb, wd, ww) {
  return [tb / 10000, wd / 5000, ww / 5000];
}

function computeFeaturesForClient(
  transactions,
  referenceDate = '2025-06-01',
  windowDays = 180
) {
  const refDate = parseISODate(referenceDate);
  let total_balance = 0, weighted_deposit = 0, weighted_withdrawal = 0;
  for (const tx of transactions) {
    const dep = Number(tx.deposit) || 0;
    const wit = Number(tx.withdrawal) || 0;
    const txDate = parseISODate(tx.date);
    const w = recencyWeight(txDate, refDate, windowDays);
    total_balance += dep - wit;
    weighted_deposit += dep * w;
    weighted_withdrawal += wit * w;
  }
  return [total_balance, weighted_deposit, weighted_withdrawal];
}

// ============================================================================
// 5) Preparar dataset e treinar modelo em memória
// ============================================================================

async function prepareDataset() {
  console.log('Gerando transações sintéticas (5000 clientes)…');
  const txs = generateSyntheticTransactions(5000);
  console.log('Consolidando features…');
  const featArr = consolidateFeatures(txs);
  console.log('Gerando scores sintéticos…');
  const scores = generateSyntheticScore(featArr);

  const Xs = featArr.map(r => normalizeFeaturesRaw(r.total_balance, r.weighted_deposit, r.weighted_withdrawal));
  // labels normalizados de 300–1000 para [0,1]
  const ys = scores.map(s => (s - 300) / 700);

  const idx = Array.from(tf.util.createShuffledIndices(Xs.length));
  const trainCount = Math.floor(Xs.length * 0.8);
  const trainIdx = idx.slice(0, trainCount), testIdx = idx.slice(trainCount);

  const X_train = trainIdx.map(i => Xs[i]), y_train = trainIdx.map(i => ys[i]);
  const X_test = testIdx.map(i => Xs[i]), y_test = testIdx.map(i => [ys[i]]);

  return {
    xsTrainTensor: tf.tensor2d(X_train),
    ysTrainTensor: tf.tensor2d(y_train.map(v => [v])),
    xsTestTensor: tf.tensor2d(X_test),
    ysTestTensor: tf.tensor2d(y_test)
  };
}

async function trainModelInMemory() {
  const { xsTrainTensor, ysTrainTensor, xsTestTensor, ysTestTensor } = await prepareDataset();
  console.log('Definindo modelo (normalizado, sigmoid)…');
  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [3], units: 64, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
  model.compile({ optimizer: tf.train.adam(0.001), loss: 'meanSquaredError', metrics: ['mse'] });

  console.log('Treinando por 100 epochs…');
  await model.fit(xsTrainTensor, ysTrainTensor, {
    epochs: 100, batchSize: 64, validationSplit: 0.1,
    callbacks: { onEpochEnd: (e, logs) => { if (e % 10 === 0) console.log(`Epoch ${e}: loss=${logs.loss.toFixed(4)}, val_loss=${logs.val_loss.toFixed(4)}`); } }
  });

  console.log('Avaliação no teste…');
  const evalResult = await model.evaluate(xsTestTensor, ysTestTensor);
  const rmse = Math.sqrt((await evalResult[0].data())[0]);
  console.log(`RMSE (normalizado) no teste: ${rmse.toFixed(4)}`);

  return model;
}

// ============================================================================
// 6) Iniciar servidor após treino
// ============================================================================

(async () => {
  const model = await trainModelInMemory();

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.post('/predict', async (req, res) => {
    try {
      const { transactions, windowDays, referenceDate } = req.body;
      if (!Array.isArray(transactions) || transactions.length === 0) {
        return res.status(400).json({ error: 'Envie um array de transações não vazio.' });
      }

      const refDate = referenceDate || '2025-06-01';
      const win = typeof windowDays === 'number' ? windowDays : 180;
      const [tb, wd, ww] = computeFeaturesForClient(transactions, refDate, win);

      if ([tb, wd, ww].some(v => isNaN(v))) {
        return res.status(500).json({ error: 'Erro ao consolidar features → valores inválidos.' });
      }

      const [tbN, wdN, wwN] = normalizeFeaturesRaw(tb, wd, ww);
      const input = tf.tensor2d([[tbN, wdN, wwN]]);
      let predN = (await model.predict(input).array())[0][0];
      predN = Math.min(Math.max(predN, 0), 1);
      let score = 300 + predN * 700;  // map back to 300–1000
      score = Math.round(Math.min(Math.max(score, 300), 1000));

      return res.json({ score });
    } catch (err) {
      console.error('Erro em /predict:', err);
      return res.status(500).json({ error: 'Erro interno no servidor.' });
    }
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`AI-score-ML rodando na porta ${PORT}`));
})();