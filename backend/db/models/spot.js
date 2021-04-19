'use strict';
module.exports = (sequelize, DataTypes) => {
    const Spot = sequelize.define('Spot', {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(1000),
            allowNull: false,
            unique: true
        },
        zipCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cityId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hostId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pricePerNight: {
            type: DataTypes.NUMERIC(10,2),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        latitude: {
            type: DataTypes.NUMERIC(10,5),
            allowNull: false,
        },
        longitude: {
            type: DataTypes.NUMERIC(10,5),
            allowNull: false,
        },
    }, {});
    Spot.associate = function (models) {
        // associations can be defined here
        Spot.belongsTo(models.User, { foreignKey: 'hostId'});
        Spot.hasMany(models.Media, { foreignKey: "spotId" });
        Spot.belongsTo(models.City, { foreignKey: "cityId" })
    };
    return Spot;
};
