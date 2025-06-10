const { Oferta } = require('../models');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async criarOferta(req, res) {
    try {
      const { nome, descricao, taxaJuros, numeroParcelas, valor, scoreMinimo } = req.body;

      const novaOferta = await Oferta.create({
        id: uuidv4(),
        nome,
        descricao,
        taxaJuros,
        numeroParcelas,
        valor,
        scoreMinimo
      });

      return res.status(201).json(novaOferta);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao criar oferta', detalhe: error.message });
    }
  },

  async listarOfertas(req, res) {
    try {
      const ofertas = await Oferta.findAll();
      return res.status(200).json(ofertas);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao listar ofertas', detalhe: error.message });
    }
  },

  async ofertasRecomendadas(req, res) {
    try {
      const score = parseInt(req.params.score);
      const ofertas = await Oferta.findAll({
        where: {
          scoreMinimo: {
            [require('sequelize').Op.lte]: score
          }
        }
      });

      return res.status(200).json(ofertas);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao buscar ofertas recomendadas', detalhe: error.message });
    }
  },
  async atualizarOferta(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao, taxaJuros, numeroParcelas, valor, scoreMinimo } = req.body;

      const oferta = await Oferta.findByPk(id);
      if (!oferta) {
        return res.status(404).json({ erro: 'Oferta não encontrada' });
      }

      await oferta.update({ nome, descricao, taxaJuros, numeroParcelas, valor, scoreMinimo });

      return res.status(200).json({ mensagem: 'Oferta atualizada com sucesso', oferta });
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao atualizar oferta', detalhe: error.message });
    }
  },
  async excluirOferta(req, res) {
    try {
      const { id } = req.params;

      const oferta = await Oferta.findByPk(id);
      if (!oferta) {
        return res.status(404).json({ erro: 'Oferta não encontrada' });
      }

      await oferta.destroy();

      return res.status(200).json({ mensagem: 'Oferta excluída com sucesso' });
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao excluir oferta', detalhe: error.message });
    }
  }


};
