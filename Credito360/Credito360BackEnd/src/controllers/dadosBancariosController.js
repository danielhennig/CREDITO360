const { Oferta } = require('../models');

// Função para calcular um score simples com base no saldo total
const calcularScore = (saldoTotal) => {
  if (saldoTotal >= 10000) return 800;
  if (saldoTotal >= 5000) return 600;
  if (saldoTotal >= 2000) return 400;
  return 200;
};

module.exports = {
  async receberDados(req, res) {
    try {
      const { saldo, transacoes } = req.body;

      if (!saldo || !Array.isArray(transacoes)) {
        return res.status(400).json({ erro: 'Saldo e transações são obrigatórios.' });
      }

      const score = calcularScore(saldo);

      // Buscar ofertas com score menor ou igual ao score do usuário
      const ofertasCompatíveis = await Oferta.findAll({
        where: {
          scoreMinimo: {
            [require('sequelize').Op.lte]: score
          }
        }
      });

      return res.status(200).json({
        scoreCalculado: score,
        ofertasRecomendadas: ofertasCompatíveis
      });

    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao processar dados bancários.', detalhe: error.message });
    }
  }
};
