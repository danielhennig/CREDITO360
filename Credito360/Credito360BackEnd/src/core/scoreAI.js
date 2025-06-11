const axios = require('axios');

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

// ===== Normalização e extração de features =====
function convertTransactions(transactions) {
    return transactions.map(tx => {
        const dep = tx.tipo === 'deposito' ? tx.valor : 0;
        const wit = tx.tipo === 'saque' ? tx.valor : 0;
        return {
            deposit: dep,
            withdrawal: wit,
            date: new Date(tx.createdAt).toISOString().slice(0, 10) // formato YYYY-MM-DD
        };
    });
}

// ===== Chamada ao servidor IA =====
async function scoreTransactions(transactions) {
    const formattedTx = convertTransactions(transactions);

    try {
        const { data } = await axios.post('http://localhost:5000/predict', {
            transactions: formattedTx,
            referenceDate: '2025-06-01',
            windowDays: 180
        });

        if (typeof data.score !== 'number') {
            throw new Error('Score inválido retornado pela IA.');
        }

        return data.score;
    } catch (err) {
        console.error('Erro ao obter score da IA:', err.message);
        throw new Error('Erro ao processar score via IA.');
    }
}

module.exports = { scoreTransactions };
