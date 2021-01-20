'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('book_authors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      book_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'books',
            schema: 'public'
          },
          key: 'id'
        }
      },
      author_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'books',
            schema: 'public'
          },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('book_authors');
  }
};