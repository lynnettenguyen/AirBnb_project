'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [
      {
        roomId: 1,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-25869988/original/c7ff907b-eefa-4b6a-aa1a-d3d559e9fe79?im_w=1200'
      },
      {
        roomId: 2,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-33489758/original/00ed3e9f-7e1c-4032-8ba1-15d84134762d.jpeg?im_w=1200'
      },
      {
        roomId: 3,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-616025344459791396/original/e7f68de1-036e-40ae-b7ed-2e6a79e5003f.jpeg?im_w=1200'
      },
      {
        reviewId: 1,
        type: 'review',
        url: 'https://a0.muscache.com/im/pictures/3179887c-a016-4830-a359-673dd56aa897.jpg?im_w=1200'
      },
      {
        reviewId: 2,
        type: 'review',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-33489758/original/aa1f45b8-504b-49cb-ab20-3b736c14a070.jpeg?im_w=720'
      },
      {
        reviewId: 3,
        type: 'review',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-616025344459791396/original/38b875e0-b085-4151-afde-29a09ee78295.jpeg?im_w=1440'
      },
      {
        reviewId: 4,
        type: 'review',
        url: 'https://a0.muscache.com/im/pictures/06b27471-7e0e-48ea-90ed-2483974df750.jpg?im_w=720'
      },
      {
        reviewId: 5,
        type: 'review',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-33489758/original/254384e4-fe72-45f2-b261-0a26a6520199.jpeg?im_w=1200'
      },
      {
        roomId: 4,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/f5663fe3-d1f3-469a-a7dc-4c9a6ff2b302?im_w=1200'
      },
      {
        roomId: 4,
        type: 'review',
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/c3420f8b-5adc-418e-9ca0-f351c6c8fcde?im_w=720'
      },
    ], {});

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
