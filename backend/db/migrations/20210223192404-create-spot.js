'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      address: {
        type: Sequelize.STRING(1000),
        allowNull: false,
        unique: true
      },
      hostId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: {
                tableName: "Users"
            }
        }
      },
      pricePerNight: {
        type: Sequelize.NUMERIC(10,2),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      latitude: {
          type: Sequelize.NUMERIC(10,5),
          allowNull: false
      },
      longitude: {
          type: Sequelize.NUMERIC(10, 5),
          allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};
