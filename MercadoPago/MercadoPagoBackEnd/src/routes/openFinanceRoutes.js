const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const controller = require('../controllers/openFinanceController');

router.get('/dados',  controller.dadosBancarios);

module.exports = router;
