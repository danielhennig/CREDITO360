const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota de criação de cliente
router.post('/clientes', clienteController.criarCliente);

module.exports = router;
