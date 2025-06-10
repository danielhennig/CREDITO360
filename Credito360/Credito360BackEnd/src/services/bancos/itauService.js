const axios = require('axios');

async function login(numeroConta, senha) {
    const { data } = await axios.post('http://localhost:3000/itau/login', { numeroConta, senha });
    return data.token;
}

async function gerarConsentimento(token) {
    // Simula o consentimento do cliente
    return { consentimento: true, data: new Date().toISOString() };
}

async function obterExtrato(token) {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const { data } = await axios.get('http://localhost:3000/itau/transacoes/0001', config);
    return data;
}

async function calcularScore(transacoes) {
    const saldo = transacoes.reduce((total, t) => total + t.valor, 0);
    return Math.round(saldo / 100); // Exemplo simples
}

async function obterOfertas(score) {
    const { data } = await axios.get(`http://localhost:3000/itau/ofertas/recomendadas/${score}`);
    return data;
}

module.exports = {
    login,
    gerarConsentimento,
    obterExtrato,
    calcularScore,
    obterOfertas
};
