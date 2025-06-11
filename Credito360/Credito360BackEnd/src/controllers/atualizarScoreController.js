const conexoesCliente = require('../core/scoreCache');
const itauService = require('../services/bancos/itauService');
const sicrediService = require('../services/bancos/sicrediService');
const mercadoPagoService = require('../services/bancos/mercadoPagoService');
const banrisulService = require('../services/bancos/banrisulService');

const bancos = {
    itau: itauService,
    sicredi: sicrediService,
    banrisul: banrisulService,
    'mercado-pago': mercadoPagoService
};

async function atualizarScore(req, res) {
    const { cpf } = req.params;
    const conexao = conexoesCliente[cpf];

    if (!conexao || !conexao.bancosConectados) {
        return res.status(404).json({ erro: 'Cliente não tem bancos conectados.' });
    }

    try {
        let todasTransacoes = [];
        let ofertasPorBanco = {};
        let bancosConectados = Object.entries(conexao.bancosConectados);

        for (const [banco, numeroConta] of bancosConectados) {
            const service = bancos[banco];
            const { transacoes, saldo } = await service.obterExtrato(numeroConta);
            todasTransacoes.push(...transacoes);
            const score = await service.calcularScore(transacoes, saldo);
            const ofertas = await service.obterOfertas(score);
            ofertasPorBanco[banco] = ofertas;
        }

        const saldoTotal = todasTransacoes.reduce((acc, t) => acc + t.valor, 0);
        const scoreUnificado = Math.max(0, Math.round(saldoTotal / 100));

        return res.json({
            cpf,
            score: scoreUnificado,
            bancosConectados: Object.keys(conexao.bancosConectados),
            ofertas: ofertasPorBanco
        });
    } catch (erro) {
        return res.status(500).json({ erro: 'Erro ao atualizar score', detalhes: erro.message });
    }
}

module.exports = { atualizarScore };
