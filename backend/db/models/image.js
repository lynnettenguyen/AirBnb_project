'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.belongsTo(models.Room, {
        foreignKey: 'roomId'
      })
      Image.belongsTo(models.Review, {
        foreignKey: 'reviewId'
      })
    }
  }
  Image.init({
    reviewId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Reviews',
        key: 'id'
      }
    },
    roomId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Rooms',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
