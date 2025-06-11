const conexoesCliente = require('../core/scoreCache');
const itauService = require('../services/bancos/itauService');
const sicrediService = require('../services/bancos/sicrediService');
const banrisulService = require('../services/bancos/banrisulService');
const mercadoPagoService = require('../services/bancos/mercadoPagoService');

const servicos = {
    itau: itauService,
    sicredi: sicrediService,
    banrisul: banrisulService,
    'mercado pago': mercadoPagoService
};

async function atualizarScore(req, res) {
    const { cpf } = req.params;

    const conexao = conexoesCliente[cpf];
    if (!conexao || !conexao.bancosConectados) {
        return res.status(404).json({ erro: 'Nenhum banco conectado para este CPF.' });
    }

    const bancos = conexao.bancosConectados;
    const resultado = {
        cpf,
        scoreTotal: 0,
        bancos: []
    };

    let somaScores = 0;
    let contador = 0;

    for (const [nomeBanco, numeroConta] of Object.entries(bancos)) {
        const service = servicos[nomeBanco.toLowerCase()];
        if (!service) continue;

        try {
            const { transacoes, saldo, cliente } = await service.obterExtrato(numeroConta);
            const score = await service.calcularScore(transacoes, saldo);
            const ofertas = await service.obterOfertas(score);

            resultado.bancos.push({
                banco: nomeBanco,
                cliente,
                score,
                ofertas
            });

            somaScores += score;
            contador++;
        } catch (erro) {
            resultado.bancos.push({
                banco: nomeBanco,
                erro: erro.message
            });
        }
    }

    resultado.scoreTotal = contador ? Math.round(somaScores / contador) : 0;
    return res.json(resultado);
}

module.exports = { atualizarScore };
