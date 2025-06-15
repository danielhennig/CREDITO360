const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);

// Cria os models com sequelize instanciado
const Conta = require('./Conta')(sequelize, DataTypes);
const Transacao = require('./Transacao')(sequelize, DataTypes);
const Oferta = require('./Oferta')(sequelize, DataTypes);
const Consentimento = require('./Consentimento')(sequelize, DataTypes);

module.exports = {
  sequelize,
  Conta,
  Transacao,
  Oferta,
  Consentimento
};
