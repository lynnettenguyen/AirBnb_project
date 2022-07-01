'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [
      {
        roomId: 1,
        type: 'room',
        url: 'image url for room 1'
      },
      {
        roomId: 2,
        type: 'room',
        url: 'image url for room 2'
      },
      {
        reviewId: 1,
        type: 'review',
        url: 'image url for review 1'
      },
    ], {});

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
