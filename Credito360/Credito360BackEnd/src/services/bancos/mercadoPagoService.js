const axios = require('axios');
const { scoreTransactions } = require('../../core/scoreAI');

const BASE_URL = 'http://mercadopago-backend:3003/mercadopago';

async function obterExtrato(numeroConta) {
    const { data } = await axios.get(`${BASE_URL}/open-finance/dados`, {
        params: { numeroConta }
    });

    if (!data || !data.transacoes || !Array.isArray(data.transacoes)) {
        throw new Error('Resposta inválida da API do banco.');
    }

    return {
        transacoes: data.transacoes,
        saldo: data.conta?.saldo || 0,
        cliente: {
            nome: data.conta?.nome || 'Desconhecido',
            email: data.conta?.email || null,
            numeroConta: data.conta?.numeroConta || numeroConta,
            cpf: data.conta?.cpf || null
        }
    };
}

// Agora o score será calculado pela IA com base nas transações
async function calcularScore(transacoes) {
    return await scoreTransactions(transacoes);
}

async function obterOfertas(score) {
    const { data } = await axios.get(`${BASE_URL}/ofertas/recomendadas/${score}`);
    return data;
}

module.exports = {
    obterExtrato,
    calcularScore,
    obterOfertas
};
