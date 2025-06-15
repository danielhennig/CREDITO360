'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ofertas', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
        primaryKey: true
      },
      nome: Sequelize.STRING,
      descricao: Sequelize.TEXT,
      taxaJuros: Sequelize.FLOAT,
      numeroParcelas: Sequelize.INTEGER,
      valor: Sequelize.FLOAT,
      scoreMinimo: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Ofertas');
  }
};
