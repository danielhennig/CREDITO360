const itauService = require('../services/bancos/itauService'); // ✅ Necessário
const sicrediService = require('../services/bancos/sicrediService');
const mercadoPagoService = require('../services/bancos/mercadoPagoService');
const banrisulService = require('../services/bancos/banrisulService');

async function processarConexao(service, nomeBanco, req, res) {
    const { numeroConta } = req.body;
    if (!numeroConta) return res.status(400).json({ erro: 'Informe numeroConta.' });

    try {
        const { transacoes, saldo, cliente } = await service.obterExtrato(numeroConta);
        const score = await service.calcularScore(transacoes, saldo);
        const ofertas = await service.obterOfertas(score);

        return res.json({ banco: nomeBanco, cliente, score, ofertas });
    } catch (erro) {
        return res.status(500).json({ erro: `Erro ao conectar com ${nomeBanco}`, detalhes: erro.message });
    }
}

module.exports = {
    conectarItau: (req, res) => processarConexao(itauService, 'Itaú', req, res),
    conectarSicredi: (req, res) => processarConexao(sicrediService, 'Sicredi', req, res),
    conectarMercadoPago: (req, res) => processarConexao(mercadoPagoService, 'Mercado Pago', req, res),
    conectarBanrisul: (req, res) => processarConexao(banrisulService, 'Banrisul', req, res)
};
