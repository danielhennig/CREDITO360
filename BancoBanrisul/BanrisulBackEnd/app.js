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

app.use('/itau/contas', contaRoutes);
app.use('/itau/transacoes', transacaoRoutes);
app.use('/itau/ofertas', ofertaRoutes);
app.use('/itau/consentimentos', consentimentoRoutes);
app.use('/itau', authRoutes);
app.use('/itau/open-finance', openFinanceRoutes);

app.get('/', (req, res) => {
    res.send('Banco 360 API');
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
