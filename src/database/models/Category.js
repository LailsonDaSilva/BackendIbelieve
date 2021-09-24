

'use strict';
const {Model,  DataTypes} = require('sequelize');

  class Category extends Model {
    static init(sequelize) {
      super.init({
        name: DataTypes.STRING,
      }, {
        sequelize,
        tableName: 'categories',
      });
    }
    static associate(models) {
      this.belongsToMany( models.Establishment, { foreignKey: 'category_id', through: 'EstablishmentCategories', as: 'establishments'});
    }
  }


module.exports = Category;