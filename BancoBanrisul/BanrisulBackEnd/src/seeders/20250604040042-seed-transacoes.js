const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    const contas = await queryInterface.sequelize.query(
      `SELECT id, cpf, "numeroConta" FROM "Conta";`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const joao = contas.find(c => c.cpf === '11111111111');
    const maria = contas.find(c => c.cpf === '22222222222');

    if (!joao || !maria) {
      throw new Error('Contas não encontradas. Execute a seed das contas primeiro.');
    }

    const now = new Date();

    const transacoes = [
      // João
      { contaId: joao.id, numeroConta: joao.numeroConta, tipo: 'deposito', valor: 1000 },
      { contaId: joao.id, numeroConta: joao.numeroConta, tipo: 'saque', valor: 200 },
      { contaId: joao.id, numeroConta: joao.numeroConta, tipo: 'deposito', valor: 300 },
      { contaId: joao.id, numeroConta: joao.numeroConta, tipo: 'saque', valor: 100 },
      { contaId: joao.id, numeroConta: joao.numeroConta, tipo: 'deposito', valor: 1500 },

      // Maria
      { contaId: maria.id, numeroConta: maria.numeroConta, tipo: 'deposito', valor: 2000 },
      { contaId: maria.id, numeroConta: maria.numeroConta, tipo: 'saque', valor: 500 },
      { contaId: maria.id, numeroConta: maria.numeroConta, tipo: 'deposito', valor: 700 },
      { contaId: maria.id, numeroConta: maria.numeroConta, tipo: 'saque', valor: 250 },
      { contaId: maria.id, numeroConta: maria.numeroConta, tipo: 'deposito', valor: 1200 }
    ];

    await queryInterface.bulkInsert('Transacao',
      transacoes.map(t => ({
        id: uuidv4(),
        contaId: t.contaId,
        numeroConta: t.numeroConta,
        tipo: t.tipo,
        valor: t.valor,
        createdAt: now,
        updatedAt: now
      }))
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Transacao', null, {});
  }
};
