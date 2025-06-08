const axios = require('axios');
const { Oferta } = require('../models');
const { Op } = require('sequelize');

const calcularScore = (saldo) => {
    if (saldo >= 10000) return 800;
    if (saldo >= 5000) return 600;
    if (saldo >= 2000) return 400;
    return 200;
};

module.exports = {
    async consultarBanco360(req, res) {
        try {
            const { cpf } = req.body;

            if (!cpf) return res.status(400).json({ erro: 'CPF é obrigatório.' });

            const headers = {
                Authorization: `Bearer ${process.env.BANCO360_TOKEN}`
            };

            // Busca dados da conta
            const contaRes = await axios.get(`http://localhost:3000/itau/conta/${cpf}`, { headers });
            const transacoesRes = await axios.get(`http://localhost:3000/itau/conta/${cpf}/transacoes`, { headers });

            const conta = contaRes.data;
            const transacoes = transacoesRes.data;

            const saldo = conta.saldo || 0;
            const score = calcularScore(saldo);

            const ofertas = await Oferta.findAll({
                where: {
                    scoreMinimo: { [Op.lte]: score }
                }
            });

            return res.json({
                conta: conta.nome,
                saldo,
                score,
                ofertasRecomendadas: ofertas
            });

        } catch (err) {
            return res.status(500).json({ erro: 'Erro ao consultar dados do Banco360', detalhe: err.message });
        }
    }
};
