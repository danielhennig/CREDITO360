const { Conta } = require('../models');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const gerarNumeroConta = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6 dígitos
};

module.exports = {
    async criarConta(req, res) {
        try {
            const { nome, cpf, email, senha } = req.body;

            const senhaCriptografada = await bcrypt.hash(senha, 10);
            const numeroConta = gerarNumeroConta();

            const novaConta = await Conta.create({
                id: uuidv4(),
                nome,
                cpf,
                email,
                senha: senhaCriptografada,
                numeroConta
            });

            // Remover senha da resposta
            const contaSemSenha = { ...novaConta.toJSON() };
            delete contaSemSenha.senha;

            return res.status(201).json(contaSemSenha);
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao criar conta', detalhe: error.message });
        }
    },
    async listarContas(req, res) {
        try {
            const contas = await Conta.findAll({
                attributes: { exclude: ['senha'] } // oculta a senha
            });

            return res.status(200).json(contas);
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao listar contas', detalhe: error.message });
        }
    }

};
