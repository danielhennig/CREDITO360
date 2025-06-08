const express = require('express');
const router = express.Router();
const dadosBancariosController = require('../controllers/dadosBancariosController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/dados-bancarios', authMiddleware, dadosBancariosController.receberDados);

module.exports = router;
