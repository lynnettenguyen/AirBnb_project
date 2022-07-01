'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reservations', [
      {
        roomId: 1,
        userId: 2,
        startDate: '2022-08-28',
        endDate: '2022-08-31'
      },
      {
        roomId: 1,
        userId: 3,
        startDate: '2022-08-01',
        endDate: '2022-08-03'
      },
      {
        roomId: 2,
        userId: 1,
        startDate: '2022-08-02',
        endDate: '2022-08-05'
      },
      {
        roomId: 2,
        userId: 3,
        startDate: '2022-08-06',
        endDate: '2022-08-12'
      },
      {
        roomId: 3,
        userId: 1,
        startDate: '2022-08-18',
        endDate: '2022-08-22'
      },
      {
        roomId: 3,
        userId: 2,
        startDate: '2022-09-04',
        endDate: '2022-09-07'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservations', null, {});
  }
};
