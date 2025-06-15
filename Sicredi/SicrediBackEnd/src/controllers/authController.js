const { Conta } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async login(req, res) {
        try {
            const { numeroConta, senha } = req.body;

            const conta = await Conta.findOne({ where: { numeroConta } });
            if (!conta) {
                return res.status(404).json({ erro: 'Conta não encontrada' });
            }

            const senhaValida = await bcrypt.compare(senha, conta.senha);
            if (!senhaValida) {
                return res.status(401).json({ erro: 'Senha incorreta' });
            }

            const token = jwt.sign(
                {
                    contaId: conta.id,        // obrigatório para validar consentimento
                    numeroConta: conta.numeroConta,
                    email: conta.email
                },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );


            return res.status(200).json({ token });
        } catch (error) {
            return res.status(500).json({ erro: 'Erro no login', detalhe: error.message });
        }
    }
};
