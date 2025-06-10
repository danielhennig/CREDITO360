const express = require('express');
const router = express.Router();
const controller = require('../controllers/integracaoBancosController');

router.post('/conectar/itau', controller.conectarItau);

module.exports = router;
