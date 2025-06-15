const { Conta, Transacao } = require('../models');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async criarTransacao(req, res) {
        try {
            const { tipo, valor } = req.body;
            const conta = req.conta; // injetado pelo middleware verificarNumeroContaExiste

            if (tipo === 'saque' && conta.saldo < valor) {
                return res.status(400).json({ erro: 'Saldo insuficiente' });
            }

            const novoSaldo = tipo === 'deposito'
                ? conta.saldo + valor
                : conta.saldo - valor;

            await conta.update({ saldo: novoSaldo });

            const novaTransacao = await Transacao.create({
                id: uuidv4(),
                contaId: conta.id,
                numeroConta: conta.numeroConta,
                tipo,
                valor
            });

            return res.status(201).json({
                mensagem: 'Transação realizada com sucesso',
                novaTransacao
            });
        } catch (error) {
            return res.status(500).json({ erro: 'Erro na transação', detalhe: error.message });
        }
    },

    async listarTransacoesPorConta(req, res) {
        try {
            const { numeroConta } = req.params;

            const conta = await Conta.findOne({ where: { numeroConta } });
            if (!conta) {
                return res.status(404).json({ erro: 'Conta não encontrada' });
            }

            const transacoes = await Transacao.findAll({
                where: { numeroConta },
                order: [['createdAt', 'DESC']]
            });

            return res.status(200).json({
                saldoAtual: conta.saldo,
                transacoes
            });
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao listar extrato', detalhe: error.message });
        }
    }
};
