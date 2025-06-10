const express = require('express');
const router = express.Router();
const contaController = require('../controllers/contaController.js');

router.post('/', contaController.criarConta);
router.get('/', contaController.listarContas);

module.exports = router;
