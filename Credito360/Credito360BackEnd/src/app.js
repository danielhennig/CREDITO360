const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Importação das rotas
const clienteRoutes = require('./routes/clienteRoutes');
const authRoutes = require('./routes/authRoutes');
const dadosBancariosRoutes = require('./routes/dadosBancariosRoutes');
const conexaoBancariaRoutes = require('./routes/conexaoBancariaRoutes');
const scoreRoutes = require('./routes/scoreRoutes');

// Prefixo padrão: /credito360
app.use('/credito360', clienteRoutes);
app.use('/credito360', authRoutes);
app.use('/credito360', dadosBancariosRoutes);
app.use('/credito360', conexaoBancariaRoutes);
app.use('/credito360', scoreRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
