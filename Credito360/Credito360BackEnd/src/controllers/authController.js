const { Cliente } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async login(req, res) {
        try {
            const { email, senha } = req.body;

            if (!email || !senha) {
                return res.status(400).json({ erro: 'Email e senha são obrigatórios.' });
            }

            const cliente = await Cliente.findOne({ where: { email } });
            if (!cliente) {
                return res.status(404).json({ erro: 'Cliente não encontrado.' });
            }

            const senhaValida = await bcrypt.compare(senha, cliente.senha);
            if (!senhaValida) {
                return res.status(401).json({ erro: 'Senha incorreta.' });
            }

            const token = jwt.sign(
                { id: cliente.id, email: cliente.email },
                process.env.JWT_SECRET,
                { expiresIn: '2h' }
            );

            return res.status(200).json({ token });
        } catch (error) {
            return res.status(500).json({ erro: 'Erro no login', detalhe: error.message });
        }
    }
};
