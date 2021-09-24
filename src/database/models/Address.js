
const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  static init(sequelize) {
    super.init({
      zipcode: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'addresses',
    })
  }

  static associate(models) {
    this.belongsTo(models.Establishment, { foreignKey: 'establishment_id', as: 'establishments' });
  }
}

module.exports = Address;