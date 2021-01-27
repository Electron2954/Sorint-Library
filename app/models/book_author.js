'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book_author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  book_author.init({
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'books',
          schema: 'public'
        },
        key: 'id'
      }
    },
    author_id: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'authors',
          schema: 'public'
        },
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'book_author',
  });
  return book_author;
};