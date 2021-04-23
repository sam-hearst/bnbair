'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    cityImgUrl: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    state: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cityLat: {
        type: DataTypes.NUMERIC(10, 5),
        allowNull: false,
    },
    cityLong: {
        type: DataTypes.NUMERIC(10, 5),
        allowNull: false,
    },
  }, {});
  City.associate = function(models) {
    // associations can be defined here
    City.hasMany(models.Spot, { foreignKey: "cityId" })
  };
  return City;
};
