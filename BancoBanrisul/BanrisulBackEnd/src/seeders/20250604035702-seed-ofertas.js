const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Ofertas', [
      {
        id: uuidv4(),
        nome: 'Crédito Básico',
        descricao: 'Oferta simples para emergências.',
        taxaJuros: 2.0,
        numeroParcelas: 12,
        valor: 5000,
        scoreMinimo: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Crédito Premium',
        descricao: 'Oferta especial para clientes com alto score.',
        taxaJuros: 1.5,
        numeroParcelas: 24,
        valor: 15000,
        scoreMinimo: 750,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Ofertas', null, {});
  }
};
