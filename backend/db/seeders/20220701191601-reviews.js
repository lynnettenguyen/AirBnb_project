'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        userId: 2,
        roomId: 1,
        star: 4,
        review: 'test review 1 for room 1; The place was perfect for our family and friends visit to Lake Tahoe'
      },
      {
        userId: 3,
        roomId: 1,
        star: 5,
        review: 'test review 2 for room 1; Beautiful house. Perfect with plenty of beds and easy lake access'
      },
      {
        userId: 1,
        roomId: 2,
        star: 3,
        review: 'test review 2 for room 2; We had a great time in their beautiful Ryad.'
      },
      {
        userId: 3,
        roomId: 2,
        star: 5,
        review: 'test review 2 for room 2; Magical little escape outside the city, beautifully furnished, very calm with an amazingly visible sky'
      },
      {
        userId: 1,
        roomId: 3,
        star: 3,
        review: 'test review 1 for room 3; This apartment is in an ideal location - close to waterfront, public transportation, tourist attractions'
      },
      {
        userId: 2,
        roomId: 3,
        star: 4,
        review: 'test review 2 for room 3; Besides the amazing views of the city you can see the entrance to the arena from the balcony! '
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
