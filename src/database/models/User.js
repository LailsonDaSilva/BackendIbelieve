'use strict';
const {Model,  DataTypes} = require('sequelize');

  class User extends Model {
    static init(sequelize) {
      super.init({
        full_name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        cpf: DataTypes.STRING,
        date_of_birth: DataTypes.DATE,
        password: DataTypes.STRING
      }, {
        sequelize
      });
    }
  }


module.exports = User;