const axios = require('axios');
const BASE_URL = 'http://localhost:3002/sicredi';

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
            numeroConta: data.conta?.numeroConta || numeroConta
        }
    };
}

async function calcularScore(transacoes, saldo) {
    const totalTransacoes = transacoes.reduce((total, t) => total + t.valor, 0);
    const base = saldo + totalTransacoes;
    return Math.max(0, Math.round(base / 100));
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
