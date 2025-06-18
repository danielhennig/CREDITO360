const { Consentimento } = require('../models');
const { Op } = require('sequelize');

module.exports = async (req, res, next) => {
  try {
    const contaId = req.usuario?.contaId;

    if (!contaId) {
      return res.status(400).json({ erro: 'contaId não encontrado no token.' });
    }

    const consentimento = await Consentimento.findOne({
      where: {
        contaId,
        autorizado: true,
        validade: {
          [Op.gt]: new Date() 
        }
      }
    });

    if (!consentimento) {
      return res.status(403).json({ erro: 'Consentimento inexistente, expirado ou revogado.' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ erro: 'Erro interno ao validar consentimento.', detalhe: error.message });
  }
};
