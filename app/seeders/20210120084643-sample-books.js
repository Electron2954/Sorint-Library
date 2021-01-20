'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('books', [{
        title: 'test title',
        genre: 'test genre',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        title: 'Under the Dome',
        genre: 'Horror fiction',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkDelete('books', null, {});
  }
};
