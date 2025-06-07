const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const clienteRoutes = require('./routes/clienteRoutes');

app.use(express.json());

// Rotas
app.use('/credito360', clienteRoutes);

app.get('/', (req, res) => {
    res.send('Crédito360 API rodando');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
