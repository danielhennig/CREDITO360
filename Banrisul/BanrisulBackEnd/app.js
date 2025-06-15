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

app.use('/banrisul/contas', contaRoutes);
app.use('/banrisul/transacoes', transacaoRoutes);
app.use('/banrisul/ofertas', ofertaRoutes);
app.use('/banrisul/consentimentos', consentimentoRoutes);
app.use('/banrisul', authRoutes);
app.use('/banrisul/open-finance', openFinanceRoutes);

app.get('/', (req, res) => {
    res.send('Banco 360 API');
});


const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
