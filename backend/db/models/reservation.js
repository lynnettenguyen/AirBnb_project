'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservation.belongsTo(models.User, {
        foreignKey: 'userId', onDelete: 'CASCADE', hooks: true
      })
      Reservation.belongsTo(models.Room, {
        foreignKey: 'roomId', onDelete: 'CASCADE', hooks: true
      })
    }
  }
  Reservation.init({
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Rooms',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    startDate: {
      type: DataTypes.DATE,
      validate: {
        isBefore: this.endDate
      }
    },
    endDate: {
      type: DataTypes.DATE,
      validate: {
        isAfter: this.startDate
      }
    },
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};
