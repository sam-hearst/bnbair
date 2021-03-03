'use strict';
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('Media', {
    spotId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
  }, {});
  Media.associate = function(models) {
    // associations can be defined here
    Media.belongsTo(models.Spot, { foreignKey: "spotId" });
  };
  return Media;
};
