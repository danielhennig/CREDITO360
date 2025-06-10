const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.json());

// Importação das rotas
const clienteRoutes = require('./routes/clienteRoutes');
const authRoutes = require('./routes/authRoutes');
const dadosBancariosRoutes = require('./routes/dadosBancariosRoutes');
const conexaoBancariaRoutes = require('./routes/conexaoBancariaRoutes');

// Prefixo padrão: /credito360
app.use('/credito360', clienteRoutes);
app.use('/credito360', authRoutes);
app.use('/credito360', dadosBancariosRoutes);
app.use('/credito360', conexaoBancariaRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.send('Crédito360 API rodando');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
