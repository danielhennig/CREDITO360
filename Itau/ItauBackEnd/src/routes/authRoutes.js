const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validarCampos = require('../middlewares/validarCamposObrigatorios');

router.post(
    '/login',
    validarCampos(['numeroConta', 'senha']),
    authController.login
);

module.exports = router;
