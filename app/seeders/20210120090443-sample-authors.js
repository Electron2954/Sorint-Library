'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('authors', [{
        name: 'test author name',
        surname: 'test author surname',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
      name: 'Stephen',
      surname: 'King',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('authors', null, {});
  }
};
