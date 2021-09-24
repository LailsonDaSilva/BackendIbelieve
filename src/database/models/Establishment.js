
'use strict';
const {Model,  DataTypes} = require('sequelize');
const Category = require('./Category');

  class Establishment extends Model {
    static init(sequelize) {
      super.init({
        name: DataTypes.STRING,
        photo: DataTypes.BLOB,
        address: DataTypes.STRING,
        discount: DataTypes.STRING,
      }, {
        sequelize,
        tableName: 'establishments',
      });
    }
    static associate(models) {
      this.belongsToMany(models.Category, { foreignKey: 'establishment_id', through: 'EstablishmentCategories', as: 'categories' });
      this.hasMany(models.Address, { foreignKey: 'establishment_id', as: 'addresses' });
    }
  }


module.exports = Establishment;