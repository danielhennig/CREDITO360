const express = require('express');
const router = express.Router();

const transacaoController = require('../controllers/transacaoController');
const validarCampos = require('../middlewares/validarCamposObrigatorios');
const verificarNumeroContaExiste = require('../middlewares/verificarNumeroContaExiste');
const authMiddleware = require('../middlewares/authMiddleware');

// ✅ Criar transação (depósito ou saque)
router.post(
    '/',

    validarCampos(['numeroConta', 'tipo', 'valor']),
    verificarNumeroContaExiste,
    transacaoController.criarTransacao
);

// ✅ Listar transações por conta (extrato)
router.get(
    '/:numeroConta',

    verificarNumeroContaExiste,
    transacaoController.listarTransacoesPorConta
);
module.exports = router;
