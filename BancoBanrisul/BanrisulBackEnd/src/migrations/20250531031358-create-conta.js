'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
    await queryInterface.createTable('Conta', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
        primaryKey: true
      },
      nome: Sequelize.STRING,
      cpf: { type: Sequelize.STRING, unique: true },
      email: { type: Sequelize.STRING, unique: true },
      senha: Sequelize.STRING,
      numeroConta: { type: Sequelize.STRING, unique: true },
      saldo: { type: Sequelize.FLOAT, defaultValue: 0 },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Conta');
  }
};
