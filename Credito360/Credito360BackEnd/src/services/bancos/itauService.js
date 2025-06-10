const axios = require('axios');
const BASE_URL = 'http://localhost:3000/itau';

async function login(numeroConta, senha) {
    const { data } = await axios.post(`${BASE_URL}/login`, { numeroConta, senha });
    return data.token;
}

async function buscarExtrato(numeroConta, token) {
    const { data } = await axios.get(`${BASE_URL}/transacoes/${numeroConta}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return data;
}

async function calcularScore(dadosExtrato) {
    const lista = Array.isArray(dadosExtrato) ? dadosExtrato : dadosExtrato.transacoes || [];
    const saldoTotal = lista.reduce((acc, t) => {
        return t.tipo === 'deposito' ? acc + t.valor : acc - t.valor;
    }, 0);


    let score = 500;
    if (saldoTotal > 2000) score += 100;
    if (saldoTotal > 5000) score += 150;
    return { saldoTotal, score };
}

async function buscarOfertas(score) {
    const { data } = await axios.get(`${BASE_URL}/ofertas/recomendadas/${score}`);
    return data;
}

module.exports = { login, buscarExtrato, calcularScore, buscarOfertas };
