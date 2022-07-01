'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reservations', [
      {
        roomId: 1,
        userId: 2,
        startDate: '2022-05-28',
        endDate: '2022-05-31'
      },
      {
        roomId: 1,
        userId: 3,
        startDate: '2022-06-01',
        endDate: '2022-06-03'
      },
      {
        roomId: 2,
        userId: 1,
        startDate: '2022-06-02',
        endDate: '2022-06-05'
      },
      {
        roomId: 2,
        userId: 3,
        startDate: '2022-06-06',
        endDate: '2022-06-12'
      },
      {
        roomId: 3,
        userId: 1,
        startDate: '2022-06-18',
        endDate: '2022-06-22'
      },
      {
        roomId: 3,
        userId: 2,
        startDate: '2022-06-23',
        endDate: '2022-06-27'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservations', null, {});
  }
};
