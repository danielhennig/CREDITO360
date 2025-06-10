const itauService = require('../services/bancos/itauService');

module.exports = {
  async conectarItau(req, res) {
    try {
      const { numeroConta, senha } = req.body;

      // Login no banco Itaú e obtenção do token
      const token = await itauService.login(numeroConta, senha);

      // Buscar extrato da conta
      const extrato = await itauService.buscarExtrato(numeroConta, token);

      // Calcular score com base no extrato
      const { saldoTotal, score } = await itauService.calcularScore(extrato);

      // Buscar ofertas com base no score
      const ofertas = await itauService.buscarOfertas(score);

      return res.status(200).json({
        banco: 'Itaú',
        numeroConta,
        saldoTotal,
        score,
        ofertas
      });
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao conectar com o banco Itaú', detalhe: error.message });
    }
  }
};
