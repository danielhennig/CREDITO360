const express = require('express');
const router = express.Router();

const controller = require('../controllers/consentimentoController');
const validarCampos = require('../middlewares/validarCamposObrigatorios');
const authMiddleware = require('../middlewares/authMiddleware');


router.post(
  '/',

  validarCampos(['escopo', 'validade']),
  controller.criarConsentimento
);

router.get(
  '/:contaId',

  controller.listarPorConta
);


module.exports = router;
