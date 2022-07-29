'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    static associate(models) {
      Reservation.belongsTo(models.User, { foreignKey: 'userId' })
      Reservation.belongsTo(models.Room, { foreignKey: 'roomId' })
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
      type: DataTypes.DATEONLY,
      allowNull: false,
      // validate: {
      //   checkDate(date) {
      //     if (new Date(date) < new Date()) {
      //       throw new Error('Selected date must be in the future')
      //     }
      //   }
      // }
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      // validate: {
      //   checkDate(date) {
      //     if (new Date(date) <= new Date()) {
      //       throw new Error('Selected date must be in the future')
      //     }
      //   },
      // },
    },
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};
