const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'seuSegredoSuperSeguro';

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ erro: 'Token ausente ou mal formatado.' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ erro: 'Token inválido.' });
    }
}

module.exports = authMiddleware;
