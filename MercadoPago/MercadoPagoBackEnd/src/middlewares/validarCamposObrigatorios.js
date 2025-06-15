module.exports = (camposObrigatorios = []) => {
    return (req, res, next) => {
        const faltando = camposObrigatorios.filter(campo => !req.body[campo]);

        if (faltando.length > 0) {
            return res.status(400).json({
                erro: 'Campos obrigatórios ausentes.',
                camposFaltando: faltando
            });
        }

        next();
    };
};
