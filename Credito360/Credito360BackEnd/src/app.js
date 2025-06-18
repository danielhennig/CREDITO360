const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
const clienteRoutes = require('./routes/clienteRoutes');
const authRoutes = require('./routes/authRoutes');
const conexaoBancariaRoutes = require('./routes/conexaoBancariaRoutes');
const scoreRoutes = require('./routes/scoreRoutes');

app.use('/credito360', clienteRoutes);
app.use('/credito360', authRoutes);
app.use('/credito360', conexaoBancariaRoutes);
app.use('/credito360', scoreRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
