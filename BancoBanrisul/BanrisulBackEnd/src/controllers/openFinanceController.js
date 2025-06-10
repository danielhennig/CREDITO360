const { Conta, Transacao } = require('../models');

module.exports = {
  async dadosBancarios(req, res) {
    try {
      const { numeroConta } = req.query;

      const conta = await Conta.findOne({ where: { numeroConta } });
      if (!conta) {
        return res.status(404).json({ erro: 'Conta não encontrada' });
      }

      const contaDetalhada = await Conta.findByPk(conta.id, {
        attributes: ['numeroConta', 'nome', 'email', 'saldo']
      });

      const transacoes = await Transacao.findAll({
        where: { contaId: conta.id },
        order: [['createdAt', 'DESC']]
      });

      return res.status(200).json({
        conta: contaDetalhada,
        transacoes
      });
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao acessar dados Open Finance', detalhe: error.message });
    }
  }
};
