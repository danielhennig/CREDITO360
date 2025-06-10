const itauService = require('../services/bancos/itauService');
const sicrediService = require('../services/bancos/sicrediService');
// idem para os outros

async function conectarItau(req, res) {
    const { numeroConta, senha } = req.body;
    if (!numeroConta || !senha) return res.status(400).json({ mensagem: 'Credenciais obrigatórias.' });

    try {
        const token = await itauService.login(numeroConta, senha);
        const consentimento = await itauService.gerarConsentimento(token);
        const extrato = await itauService.obterExtrato(token);
        const score = await itauService.calcularScore(extrato);
        const ofertas = await itauService.obterOfertas(score);

        return res.json({ banco: 'Itaú', consentimento, score, ofertas });
    } catch (erro) {
        return res.status(500).json({ erro: 'Falha na integração com Itaú', detalhes: erro.message });
    }
}
