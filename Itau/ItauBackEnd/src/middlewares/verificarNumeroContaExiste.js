const { Conta } = require('../models');

module.exports = async (req, res, next) => {
    const numeroConta = req.body.numeroConta || req.params.numeroConta;

    if (!numeroConta) {
        return res.status(400).json({ erro: 'Número da conta não informado.' });
    }

    const conta = await Conta.findOne({ where: { numeroConta } });

    if (!conta) {
        return res.status(404).json({ erro: 'Conta com esse número não encontrada.' });
    }

    req.conta = conta; // opcional, se quiser usar no controller

    next();
};
