const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para criar cliente
router.post('/clientes', clienteController.criarCliente);

// Rota protegida para obter perfil completo do cliente (sem senha)
router.get('/perfil',  clienteController.obterPerfil);

module.exports = router;
