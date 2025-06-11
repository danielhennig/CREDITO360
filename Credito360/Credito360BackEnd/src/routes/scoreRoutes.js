const express = require('express');
const router = express.Router();
const atualizarScoreController = require('../controllers/atualizarScoreController');

router.get('/atualizar-score/:cpf', atualizarScoreController.atualizarScore);

module.exports = router;
