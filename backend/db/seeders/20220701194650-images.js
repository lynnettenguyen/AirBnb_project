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
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-622834232749887013/original/dc006023-a4c2-449a-adc3-de5480c46d54.jpeg?im_w=1200'
      },
      {
        userId: 3,
        roomId: 3,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-622834232749887013/original/8c1ee392-0d9e-4e2c-a8f6-489d34051c21.jpeg?im_w=720'
      },
      {
        userId: 3,
        roomId: 3,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-622834232749887013/original/b0e8eccc-0171-4307-b9d7-9ef01610a133.jpeg?im_w=720'
      },
      {
        userId: 3,
        roomId: 3,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-622834232749887013/original/258f53ff-c280-43ae-9b57-2d1a58894db1.jpeg?im_w=720'
      },
      {
        userId: 3,
        roomId: 3,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-622834232749887013/original/7eee41ab-0674-4587-96a5-cbc3e737b722.jpeg?im_w=1200'
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
        userId: 7,
        roomId: 6,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=720'
      },
      {
        userId: 7,
        roomId: 6,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/1a3200a4-ad68-4d65-8a82-f738d548d043?im_w=720'
      },
      {
        userId: 7,
        roomId: 6,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/9e8d63dc-a594-4364-9be4-daf83610fd8c?im_w=720'
      },
      {
        userId: 7,
        roomId: 6,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/dbd4c323-322f-452b-8327-bd7f5d6231b7?im_w=720'
      },
      {
        userId: 7,
        roomId: 6,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/0e50530d-6bfe-4228-a8fc-85da226dd71d?im_w=720'
      },
      {
        userId: 5,
        roomId: 7,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/41f4b37a-bc40-4233-90b0-97d5b9cb1f18.jpg?im_w=720'
      },
      {
        userId: 5,
        roomId: 7,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/7d6c926f-a4f1-4fc3-8e88-0974f19354f9.jpg?im_w=720'
      },
      {
        userId: 5,
        roomId: 7,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/076733e1-3771-4f40-96bd-12f9febb6bea.jpg?im_w=720'
      },
      {
        userId: 5,
        roomId: 7,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/7521c38c-713c-465f-8d86-bb644bb1a7b6.jpg?im_w=720'
      },
      {
        userId: 5,
        roomId: 7,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/f58374ce-c219-4399-ad38-962b7b8cb3c0.jpg?im_w=720'
      },
      {
        userId: 1,
        roomId: 8,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/8386964c-21da-4947-9812-60a15e407acc.jpg?im_w=720'
      },
      {
        userId: 1,
        roomId: 8,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/a8118f53-95dc-4775-88b9-3300bf71e7dd.jpg?im_w=720'
      },
      {
        userId: 1,
        roomId: 8,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/b2a2bcb7-fc48-4d85-9c7a-1711aab6cac3.jpg?im_w=720'
      },
      {
        userId: 1,
        roomId: 8,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/6c0dd054-0ac5-4f52-8e60-09b09aa710ed.jpg?im_w=720'
      },
      {
        userId: 1,
        roomId: 8,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/fd69d6ba-a65c-4f69-b21b-9b6acc8b3f77.jpg?im_w=720'
      },
      {
        userId: 1,
        roomId: 9,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/085af180-b863-4757-834e-177348f2bf5c.jpg?im_w=1200'
      },
      {
        userId: 1,
        roomId: 9,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/14c50c4a-e010-47e0-9868-f91d67ecb60a.jpg?im_w=720'
      },
      {
        userId: 1,
        roomId: 9,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/db8560ad-fbaa-4fa4-b728-22d50a624ef8.jpg?im_w=720'
      },
      {
        userId: 1,
        roomId: 9,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/cf6877a6-7e86-449e-b2d3-30f948ca77c6.jpg?im_w=720'
      },
      {
        userId: 1,
        roomId: 9,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/fc73dd78-e097-4431-9937-5e706cd2e1f1.jpg?im_w=720'
      },
      {
        userId: 5,
        roomId: 10,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/26229a9b-9c2c-4e36-bb6c-bf2ee22b1514.jpg?im_w=720'
      },
      {
        userId: 5,
        roomId: 10,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/77c3c61e-930a-4e7c-ab4d-59413c1f0b87.jpg?im_w=720'
      },
      {
        userId: 5,
        roomId: 10,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/9b4d7ede-b292-4604-8d2e-5f476fe4dd2d.jpeg?im_w=720'
      },
      {
        userId: 5,
        roomId: 10,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/e425157e-a94b-4e65-b606-be486d1434ac.jpeg?im_w=1200'
      },
      {
        userId: 5,
        roomId: 10,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/b1cb771a-54d4-47a4-8b10-c4428d7163e4.jpg?im_w=720'
      },
      {
        userId: 5,
        roomId: 11,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/8daeb070-e9f1-40f1-a0c2-fb90682483d3.jpg?im_w=1440'
      },
      {
        userId: 5,
        roomId: 11,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45016629/original/a8d7fd19-d21d-4cef-9c95-3194b621a3d4.jpeg?im_w=720'
      },
      {
        userId: 5,
        roomId: 11,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45016629/original/b48678e1-ac17-4d9f-97ef-966b890782b2.jpeg?im_w=720'
      },
      {
        userId: 5,
        roomId: 11,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/b3336148-ab72-4908-b4f1-a7ca11944682.jpg?im_w=720'
      },
      {
        userId: 5,
        roomId: 11,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/c35bec17-bc41-4bc9-b5c7-d4967d56f285.jpg?im_w=720'
      },
      {
        userId: 4,
        roomId: 12,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46365978/original/b8aea442-9f30-4e6a-84ff-2bec8e525f64.jpeg?im_w=1200'
      },
      {
        userId: 4,
        roomId: 12,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46365978/original/4f8b1f97-7949-4933-989c-fccfed92a31a.jpeg?im_w=720'
      },
      {
        userId: 4,
        roomId: 12,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46365978/original/ee035a6e-9fe9-4d02-ab88-e4208cdf2b48.jpeg?im_w=1200'
      },
      {
        userId: 4,
        roomId: 12,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46365978/original/e28fb2e0-ddef-4b76-8036-64976fd4ec54.jpeg?im_w=720'
      },
      {
        userId: 4,
        roomId: 12,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46365978/original/e0bca780-6edf-4ff8-b1d8-0a46fc5b1bd8.jpeg?im_w=720'
      },
    ], {});

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
