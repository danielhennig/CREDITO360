const express = require('express');
const router = express.Router();
const banco360Controller = require('../controllers/banco360Controller');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/consultar-banco360', authMiddleware, banco360Controller.consultarBanco360);

module.exports = router;
