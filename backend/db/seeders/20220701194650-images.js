'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        roomId: 1,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48427474/original/6399ce4a-1d68-4d96-a20f-4cedb4c3d254.jpeg?im_w=1200'
      },
      {
        userId: 1,
        roomId: 1,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48427474/original/26ab2b7e-6400-4fbf-adb6-c639c808414b.jpeg?im_w=1200'
      },
      {
        userId: 1,
        roomId: 1,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48427474/original/68a13cb4-81f1-4b67-9ec2-4416d30f654a.jpeg?im_w=720'
      },
      {
        userId: 1,
        roomId: 1,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48427474/original/5e803b60-da91-46b9-8754-a1d2952b6de6.jpeg?im_w=1200'
      },
      {
        userId: 1,
        roomId: 1,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48427474/original/97c6a57e-ae65-486d-847d-37c3a0ad9379.jpeg?im_w=1200'
      },
      {
        userId: 1,
        roomId: 5,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-42720553/original/53d8ba93-4078-49a3-9e91-8554acba396b.jpeg?im_w=1200'
      },
      {
        userId: 1,
        roomId: 5,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-42720553/original/6681ffcf-ab56-4944-b63b-3137587214e2.jpeg?im_w=720'
      },
      {
        userId: 1,
        roomId: 5,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-42720553/original/3bf47b4b-36ec-44d5-80ff-42e2584d0975.jpeg?im_w=1200'
      },
      {
        userId: 1,
        roomId: 5,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-42720553/original/a1fbc2f6-f260-4395-882d-fcec29fda801.jpeg?im_w=1200'
      },
      {
        userId: 1,
        roomId: 5,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-42720553/original/c36c27b7-b7ae-4511-98af-e31da2b9565c.jpeg?im_w=1200'
      },
      {
        userId: 2,
        roomId: 2,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-29172819/original/8dae018e-ee08-4956-ab90-4a451e96e424.jpeg?im_w=1200'
      },
      {
        userId: 2,
        roomId: 2,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-29172819/original/1babdf09-e230-475b-a5a1-15322b5c8322.jpeg?im_w=720'
      },
      {
        userId: 2,
        roomId: 2,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-29172819/original/603a23e7-9b2c-43ee-a08d-114250bb0157.jpeg?im_w=720'
      },
      {
        userId: 2,
        roomId: 2,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-29172819/original/86a5d0ae-d32d-46f3-af98-90ac34626763.jpeg?im_w=720'
      },
      {
        userId: 2,
        roomId: 2,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-29172819/original/6d356e9c-a531-482b-9e9e-7ea6853d7e48.jpeg?im_w=1200'
      },
      {
        userId: 3,
        roomId: 3,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/9796fb1e-301d-413d-9c4e-10b0c0bd5fd0.jpg?im_w=1200'
      },
      {
        userId: 3,
        roomId: 3,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/87290725-9b36-4940-9137-d340d47bcf4e.jpg?im_w=1440'
      },
      {
        userId: 3,
        roomId: 3,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/25a3e538-42cc-4b48-8f78-16a7035616b6.jpg?im_w=1440'
      },
      {
        userId: 3,
        roomId: 3,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/5cf65b66-2844-489b-a9aa-478a2c08e663.jpg?im_w=1200'
      },
      {
        userId: 3,
        roomId: 3,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/0a1a8910-694c-4059-95b4-2bddcf699f50.jpg?im_w=720'
      },
      {
        userId: 7,
        roomId: 4,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/f5663fe3-d1f3-469a-a7dc-4c9a6ff2b302?im_w=1200'
      },
      {
        userId: 7,
        roomId: 4,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/c3420f8b-5adc-418e-9ca0-f351c6c8fcde?im_w=720'
      },
      {
        userId: 7,
        roomId: 4,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/99e3f381-74cf-4637-8952-92e6a457edf8?im_w=720'
      },
      {
        userId: 7,
        roomId: 4,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/674b0211-8c44-4887-81f2-65b9c6e48b9b?im_w=720'
      },
      {
        userId: 7,
        roomId: 4,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/24d19321-d5ff-4a80-852f-2413aa300880?im_w=720'
      },
      {
        userId: 1,
        roomId: 6,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=720'
      },
      {
        userId: 1,
        roomId: 6,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/1a3200a4-ad68-4d65-8a82-f738d548d043?im_w=720'
      },
      {
        userId: 1,
        roomId: 6,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/9e8d63dc-a594-4364-9be4-daf83610fd8c?im_w=720'
      },
      {
        userId: 1,
        roomId: 6,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/dbd4c323-322f-452b-8327-bd7f5d6231b7?im_w=720'
      },
      {
        userId: 1,
        roomId: 6,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/0e50530d-6bfe-4228-a8fc-85da226dd71d?im_w=720'
      },
    ], {});

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
