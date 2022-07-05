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
        foreignKey: 'ownerId', as: 'Owner'
      })
      Room.hasMany(models.Review, {
        foreignKey: 'roomId', onDelete: 'CASCADE', hooks: true
      })
      Room.hasMany(models.Image, {
        foreignKey: 'roomId', as: 'previewImage', as: 'images', onDelete: 'CASCADE', hooks: true
      })
      Room.hasMany(models.Reservation, {
        foreignKey: 'roomId', onDelete: 'CASCADE', hooks: true
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
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: DataTypes.DECIMAL(8, 6),
      allowNull: false,
    },
    lng: {
      type: DataTypes.DECIMAL(9, 6),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    numReviews: {
      type: DataTypes.INTEGER,
    },
    avgStarRating: {
      type: DataTypes.DECIMAL(3, 2),
    },
  }, {
    sequelize,
    modelName: 'Room',
    defaultScope: {
      attributes: {
        exclude: ['numReviews', 'avgStarRating']
      }
    }
  });
  return Room;
};
