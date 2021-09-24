const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Address = require('./models/Address');

const Category = require('./models/Category');
const Establishment = require('./models/Establishment');
const User = require('./models/User');

const connection = new Sequelize(dbConfig);

User.init(connection);
Establishment.init(connection);
Category.init(connection);
Address.init(connection);

Category.associate(connection.models);
Address.associate(connection.models);
Establishment.associate(connection.models);

module.exports = connection;