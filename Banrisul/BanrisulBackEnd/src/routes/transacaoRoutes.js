const express = require('express');
const router = express.Router();

const transacaoController = require('../controllers/transacaoController');
const validarCampos = require('../middlewares/validarCamposObrigatorios');
const verificarNumeroContaExiste = require('../middlewares/verificarNumeroContaExiste');
const authMiddleware = require('../middlewares/authMiddleware');


router.post(
    '/',

    validarCampos(['numeroConta', 'tipo', 'valor']),
    verificarNumeroContaExiste,
    transacaoController.criarTransacao
);


router.get(
    '/:numeroConta',

    verificarNumeroContaExiste,
    transacaoController.listarTransacoesPorConta
);
module.exports = router;
