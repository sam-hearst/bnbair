'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Cities', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(200),
                allowNull: false
            },
            cityImgUrl: {
                type: Sequelize.STRING(500),
                allowNull: false
            },
            state: {
                type: Sequelize.STRING(100),
                allowNull: false,
                defaultValue: "New York"
            },
            cityLat: {
                type: Sequelize.NUMERIC(10, 5),
                allowNull: false
            },
            cityLong: {
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
        return queryInterface.dropTable('Cities');
    }
};
