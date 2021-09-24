'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EstablishmentCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      establishment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model:'establishments', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },

     category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model:'categories', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('EstablishmentCategories');
  }
};
