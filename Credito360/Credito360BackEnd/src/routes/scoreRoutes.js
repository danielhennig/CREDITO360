const express = require('express');
const router = express.Router();
const { atualizarScore } = require('../controllers/atualizarScoreController');

router.get('/atualizar-score/:cpf', atualizarScore);

module.exports = router;
