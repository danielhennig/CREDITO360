const axios = require('axios');

const BASE_URL = 'http://localhost:3000/itau';

async function login(numeroConta, senha) {
    const { data } = await axios.post(`${BASE_URL}/login`, { numeroConta, senha });
    return data.token;
}

async function gerarConsentimento(token) {
    return { consentimento: true, data: new Date().toISOString() };
}

async function obterExtrato(token, numeroConta) {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const { data } = await axios.get(`${BASE_URL}/transacoes/${numeroConta}`, config);
    return data;
}

async function calcularScore(transacoes) {
    const saldo = transacoes.reduce((total, t) => total + t.valor, 0);
    return Math.max(0, Math.round(saldo / 100));
}

async function obterOfertas(score) {
    const { data } = await axios.get(`${BASE_URL}/ofertas/recomendadas/${score}`);
    return data;
}

module.exports = {
    login,
    gerarConsentimento,
    obterExtrato,
    calcularScore,
    obterOfertas
};
