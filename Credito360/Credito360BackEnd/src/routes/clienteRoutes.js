const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const authMiddleware = require('../middlewares/authMiddleware');
// Rota de criação de cliente
router.post('/clientes', clienteController.criarCliente);
router.get('/perfil', authMiddleware, (req, res) => {
    res.json({
        mensagem: 'Rota protegida acessada com sucesso!',
        usuario: req.usuario
    });
});
module.exports = router;
