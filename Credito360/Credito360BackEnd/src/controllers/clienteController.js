const { Cliente } = require('../models');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async criarCliente(req, res) {
        try {
            const { nome, cpf, email, senha } = req.body;

            if (!nome || !cpf || !email || !senha) {
                return res.status(400).json({ erro: 'Campos obrigatórios não preenchidos' });
            }

            const existente = await Cliente.findOne({ where: { cpf } });
            if (existente) {
                return res.status(409).json({ erro: 'CPF já cadastrado' });
            }

            const senhaCriptografada = await bcrypt.hash(senha, 10);

            const novoCliente = await Cliente.create({
                id: uuidv4(),
                nome,
                cpf,
                email,
                senha: senhaCriptografada
            });

            const clienteSemSenha = { ...novoCliente.toJSON() };
            delete clienteSemSenha.senha;

            return res.status(201).json(clienteSemSenha);
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao criar cliente', detalhe: error.message });
        }
    },
    async obterPerfil(req, res) {
        try {
            const { email } = req.user;

            if (!email) {
                return res.status(400).json({ erro: 'Token inválido: e-mail ausente' });
            }

            const cliente = await Cliente.findOne({
                where: { email },
                attributes: ['id', 'nome', 'cpf', 'email']
            });

            if (!cliente) {
                return res.status(404).json({ erro: 'Cliente não encontrado' });
            }

            return res.status(200).json(cliente);
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao buscar perfil', detalhe: error.message });
        }
    }
};

