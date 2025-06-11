const tf = require('@tensorflow/tfjs-node');

// ===== Funções auxiliares de datas e pesos =====
function parseISODate(str) {
    return new Date(str + 'T00:00:00Z');
}

function daysBetween(dateNew, dateOld) {
    return Math.floor((dateNew - dateOld) / (1000 * 60 * 60 * 24));
}

function recencyWeight(txDate, referenceDate, windowDays = 180) {
    const diff = daysBetween(referenceDate, txDate);
    let w = 1 - diff / windowDays;
    return Math.max(0, Math.min(w, 1));
}

// ===== Normalização e extração de features para 1 cliente =====
function computeFeaturesForClient(transactions, referenceDate = '2025-06-01', windowDays = 180) {
    const refDate = parseISODate(referenceDate);
    let total_balance = 0, weighted_deposit = 0, weighted_withdrawal = 0;
    for (const tx of transactions) {
        const dep = Number(tx.valor && tx.tipo === 'deposito' ? tx.valor : 0);
        const wit = Number(tx.valor && tx.tipo === 'saque' ? tx.valor : 0);
        const txDate = new Date(tx.createdAt);
        const w = recencyWeight(txDate, refDate, windowDays);
        total_balance += dep - wit;
        weighted_deposit += dep * w;
        weighted_withdrawal += wit * w;
    }
    return [total_balance, weighted_deposit, weighted_withdrawal];
}

function normalizeFeaturesRaw(tb, wd, ww) {
    return [tb / 10000, wd / 5000, ww / 5000];
}

// ===== Função pública para calcular score =====
async function scoreTransactions(transactions) {
    const [tb, wd, ww] = computeFeaturesForClient(transactions);
    const [tbN, wdN, wwN] = normalizeFeaturesRaw(tb, wd, ww);

    const model = getTrainedModel();
    const input = tf.tensor2d([[tbN, wdN, wwN]]);
    let predN = (await model.predict(input).array())[0][0];
    predN = Math.min(Math.max(predN, 0), 1);
    const score = Math.round(300 + predN * 550);
    return score;
}

// ===== Modelo fixo treinado em memória =====
function getTrainedModel() {
    const model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [3], units: 64, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
    model.compile({ optimizer: tf.train.adam(0.001), loss: 'meanSquaredError' });

    // pesos aleatórios sem re-treinamento
    return model;
}

module.exports = { scoreTransactions };
