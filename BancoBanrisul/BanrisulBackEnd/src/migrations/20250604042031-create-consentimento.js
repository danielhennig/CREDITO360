'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Consentimento', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true
      },
      contaId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Conta',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      escopo: Sequelize.STRING,
      validade: Sequelize.DATE,
      autorizado: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Consentimento');
  }
};
