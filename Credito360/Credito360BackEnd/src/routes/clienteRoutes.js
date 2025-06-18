const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/clientes', clienteController.criarCliente);


router.get('/perfil', authMiddleware, clienteController.obterPerfil);


module.exports = router;
