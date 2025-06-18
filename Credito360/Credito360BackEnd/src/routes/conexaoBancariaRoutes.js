const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const conexaoController = require('../controllers/conexaoBancariaController');


router.post('/conectar/itau',  conexaoController.conectarItau);
router.post('/conectar/sicredi',  conexaoController.conectarSicredi);
router.post('/conectar/mercado-pago',  conexaoController.conectarMercadoPago);
router.post('/conectar/banrisul',  conexaoController.conectarBanrisul);

module.exports = router;
