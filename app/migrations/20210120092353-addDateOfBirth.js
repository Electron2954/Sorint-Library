'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        "authors",
        "birth_date",
        {
          type: Sequelize.DataTypes.DATEONLY
        });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("authors", "birth_date");
  }
};
