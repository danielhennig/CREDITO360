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
const banco360Routes = require('./routes/banco360Routes');
const integracaoBancosRoutes = require('./routes/integracaoBancosRoutes');

// Prefixo padrão: /credito360
app.use('/credito360', clienteRoutes);
app.use('/credito360', authRoutes);
app.use('/credito360', dadosBancariosRoutes);
app.use('/credito360', banco360Routes);
app.use('/credito360', integracaoBancosRoutes);
// Rota de teste
app.get('/', (req, res) => {
    res.send('Crédito360 API rodando');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
