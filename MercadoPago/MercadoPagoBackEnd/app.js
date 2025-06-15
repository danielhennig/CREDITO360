const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
const contaRoutes = require('./src/routes/contaRoutes');
const transacaoRoutes = require('./src/routes/transacaoRoutes');
const ofertaRoutes = require('./src/routes/ofertaRoutes');
const consentimentoRoutes = require('./src/routes/consentimentoRoutes');
const authRoutes = require('./src/routes/authRoutes');
const openFinanceRoutes = require('./src/routes/openFinanceRoutes');

app.use('/mercadopago/contas', contaRoutes);
app.use('/mercadopago/transacoes', transacaoRoutes);
app.use('/mercadopago/ofertas', ofertaRoutes);
app.use('/mercadopago/consentimentos', consentimentoRoutes);
app.use('/mercadopago', authRoutes);
app.use('/mercadopago/open-finance', openFinanceRoutes);

app.get('/', (req, res) => {
    res.send('Banco 360 API');
});


const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
