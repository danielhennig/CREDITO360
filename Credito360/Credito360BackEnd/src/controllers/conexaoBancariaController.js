const itauService = require('../services/bancos/itauService');
const sicrediService = require('../services/bancos/sicrediService');
const mercadoPagoService = require('../services/bancos/mercadoPagoService');
const banrisulService = require('../services/bancos/banrisulService');

async function processarConexao(service, nomeBanco, req, res) {
    const { numeroConta, senha } = req.body;
    if (!numeroConta || !senha) {
        return res.status(400).json({ erro: 'Informe numeroConta e senha.' });
    }

    try {
        const token = await service.login(numeroConta, senha);
        const consentimento = await service.gerarConsentimento(token);
        const extrato = await service.obterExtrato(token);
        const score = await service.calcularScore(extrato);
        const ofertas = await service.obterOfertas(score);

        return res.json({
            banco: nomeBanco,
            consentimento,
            score,
            ofertas
        });
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
