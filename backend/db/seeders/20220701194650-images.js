'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [
      {
        roomId: 1,
        type: 'room',
        url: '../../images/room1'
      },
      {
        roomId: 2,
        type: 'room',
        url: 'image url for room 2'
      },
      {
        roomId: 3,
        type: 'room',
        url: 'image url for room 3'
      },
      {
        reviewId: 1,
        type: 'review',
        url: 'image url for review 1'
      },
      {
        reviewId: 2,
        type: 'review',
        url: 'image url for review 2'
      },
      {
        reviewId: 3,
        type: 'review',
        url: 'image url for review 3'
      },
    ], {});

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
