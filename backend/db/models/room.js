'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Room.belongsTo(models.User, {
        foreignKey: 'ownerId', onDelete: 'CASCADE', hooks: true
      })
      Room.hasMany(models.Review, {
        foreignKey: 'roomId'
      })
      Room.hasMany(models.Image, {
        foreignKey: 'roomId'
      })
      Room.hasMany(models.Reservation, {
        foreignKey: 'roomId'
      })
    }
  }
  Room.init({
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.DECIMAL(8, 6),
    },
    longitude: {
      type: DataTypes.DECIMAL(9, 6),
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT('long'),
    },
    price: {
      type: DataTypes.INTEGER,
    },
    numReviews: {
      type: DataTypes.INTEGER,
    },
    avgStarRating: {
      type: DataTypes.DECIMAL(3, 2)
    },
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};
