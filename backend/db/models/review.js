'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Review.belongsTo(models.Room, {
        foreignKey: 'roomId'
      })
      Review.hasMany(models.Image, {
        foreignKey: 'reviewId', as: 'images'
      })
    }
  }
  Review.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Rooms',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    stars: {
      type: DataTypes.INTEGER,
    },
    review: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
