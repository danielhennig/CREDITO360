const axios = require('axios');

const calcularScore = (transacoes) => {
    const saldoAproximado = transacoes.reduce((total, t) => {
        return t.tipo === 'deposito' ? total + t.valor : total - t.valor;
    }, 0);

    if (saldoAproximado >= 10000) return 800;
    if (saldoAproximado >= 5000) return 600;
    if (saldoAproximado >= 2000) return 400;
    return 200;
};

module.exports = {
    async consultarBanco360(req, res) {
        try {
            const { numeroConta } = req.body;

            if (!numeroConta) return res.status(400).json({ erro: 'Número da conta é obrigatório.' });

            const headers = {
                Authorization: `Bearer ${process.env.BANCO360_TOKEN}`
            };

            const transacoesRes = await axios.get(`http://localhost:3000/itau/transacoes/${numeroConta}`, { headers });
            const transacoes = transacoesRes.data;

            const score = calcularScore(transacoes);

            const ofertasRes = await axios.get(`http://localhost:3000/itau/ofertas/recomendadas/${score}`, { headers });
            const ofertas = ofertasRes.data;

            return res.status(200).json({
                numeroConta,
                scoreCalculado: score,
                ofertasRecomendadas: ofertas
            });

        } catch (err) {
            return res.status(500).json({
                erro: 'Erro ao consultar Banco360',
                detalhe: err.response?.data || err.message
            });
        }
    }
};
