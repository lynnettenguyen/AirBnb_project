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
      {
        userId: 4,
        roomId: 13,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/435ee4e0-7c0d-48fe-baee-c3296625f981.jpg?im_w=1200'
      },
      {
        userId: 4,
        roomId: 13,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/ce0b9309-4a02-4133-aa19-218d15477f8d.jpg?im_w=720'
      },
      {
        userId: 4,
        roomId: 13,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/f708aaf4-ff55-4421-bbaa-6bb9e2f936d0.jpg?im_w=1200'
      },
      {
        userId: 4,
        roomId: 13,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/f0032f3c-e7b5-4103-b4f4-1f9db9ba7f4e.jpg?im_w=1200'
      },
      {
        userId: 4,
        roomId: 13,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/b7388a30-5596-4f9c-bf30-97f97733e456.jpg?im_w=720'
      },
      {
        userId: 5,
        roomId: 14,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-29978802/original/5e95a134-789e-48d9-97b1-476119758282.jpeg?im_w=1200'
      },
      {
        userId: 5,
        roomId: 14,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-29978802/original/e28fce94-9db3-4130-97bd-f446db6297af.jpeg?im_w=720'
      },
      {
        userId: 5,
        roomId: 14,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-29978802/original/af724e30-ca1d-4e08-9b53-783e54863bf3.jpeg?im_w=720'
      },
      {
        userId: 5,
        roomId: 14,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-29978802/original/fe0d0605-807c-40b5-9b73-0ff061e0bf80.jpeg?im_w=1200'
      },
      {
        userId: 5,
        roomId: 14,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-29978802/original/3879029b-8704-481e-bdf4-044dfb324b01.jpeg?im_w=720'
      },
      {
        userId: 5,
        roomId: 15,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/f1fc95d8-61b2-4d97-be2c-df499b21f312.jpg?im_w=1200'
      },
      {
        userId: 5,
        roomId: 15,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/e48dca48-ed6d-489a-b4e1-8cbb8a7d91a1.jpg?im_w=1200'
      },
      {
        userId: 5,
        roomId: 15,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/500233e2-cb83-4f8c-979b-d25494d1dd85.jpg?im_w=1200'
      },
      {
        userId: 5,
        roomId: 15,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/fb8788c7-338e-4a19-9313-1c80bad6d358.jpg?im_w=1200'
      },
      {
        userId: 5,
        roomId: 15,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/6fb5ac06-07c5-4ede-b7f7-21364be7b327.jpg?im_w=1200'
      },
      {
        userId: 2,
        roomId: 16,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/3539cf0f-9244-400c-bf27-fbd2c25e1b64.jpg?im_w=720'
      },
      {
        userId: 2,
        roomId: 16,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/19ab9cad-ef4c-431e-b435-94060b38fa02.jpg?im_w=1200'
      },
      {
        userId: 2,
        roomId: 16,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/78217600-eb37-43ac-898d-0b62500c3f9b.jpg?im_w=1200'
      },
      {
        userId: 2,
        roomId: 16,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/a6fa08ad-6bd4-4993-a3bc-c7394dc8c8dc.jpg?im_w=1200'
      },
      {
        userId: 2,
        roomId: 16,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/c53b1703-722b-41aa-9f7a-1647e55b943a.jpg?im_w=720'
      },
      {
        userId: 6,
        roomId: 17,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/0decf8cb-784b-4c05-8c30-6f95d192a450.jpg?im_w=1200'
      },
      {
        userId: 6,
        roomId: 17,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/32bebc68-90b9-4e9b-b0aa-1043e1de55bd.jpg?im_w=720'
      },
      {
        userId: 6,
        roomId: 17,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/29a3c97d-32b9-4240-97e4-8f015019192d.jpg?im_w=720'
      },
      {
        userId: 6,
        roomId: 17,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/db535ca9-be22-47f2-bfe9-9af1aa702dfe.jpg?im_w=720'
      },
      {
        userId: 6,
        roomId: 17,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/0f53e300-9ff2-451a-ac96-d7a66836a3a2.jpg?im_w=1200'
      },
      {
        userId: 2,
        roomId: 18,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/da13ccea-80d1-4cf4-b275-41f1b5aa19f9.jpg?im_w=1200'
      },
      {
        userId: 2,
        roomId: 18,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/a4230759-47cb-4110-b680-f21ce19c8983.jpg?im_w=1200'
      },
      {
        userId: 2,
        roomId: 18,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/ca445e4c-fff9-449f-a525-bb327018da74.jpg?im_w=720'
      },
      {
        userId: 2,
        roomId: 18,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/e17692f1-8840-4e42-879c-254d631e138b.jpg?im_w=1200'
      },
      {
        userId: 2,
        roomId: 18,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/d7ade675-6c3f-4dfd-bff5-849c3f08e048.jpg?im_w=720'
      },
      {
        userId: 3,
        roomId: 19,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/6a24d18a-d28f-4b2e-9280-2e9e51060b50.jpg?im_w=1200'
      },
      {
        userId: 3,
        roomId: 19,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36771267/original/7067d0e1-8c3b-4588-97de-3e1a4793f86b.jpeg?im_w=1200'
      },
      {
        userId: 3,
        roomId: 19,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36771267/original/bc685587-1e3d-419e-ae7b-5c450fecc7eb.jpeg?im_w=1200'
      },
      {
        userId: 3,
        roomId: 19,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/6a27599c-45ba-4542-8784-73017f30f00e.jpg?im_w=720'
      },
      {
        userId: 3,
        roomId: 19,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36771267/original/22571450-7b42-4fa4-ad15-24ffe99e1c0d.jpeg?im_w=720'
      },
      {
        userId: 5,
        roomId: 20,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/eeda2a05-f344-4f3c-8e8d-b35b33dd5135.jpg?im_w=720'
      },
      {
        userId: 5,
        roomId: 20,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-44787980/original/287f8582-7703-44af-a5dc-7f1ba6d02b01.jpeg?im_w=720'
      },
      {
        userId: 5,
        roomId: 20,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-44787980/original/86b1231b-1f95-43fa-bdc0-7676e563d89c.jpeg?im_w=720'
      },
      {
        userId: 5,
        roomId: 20,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-44787980/original/695d68af-ab2b-485b-995d-7e9339a5aee0.jpeg?im_w=1200'
      },
      {
        userId: 5,
        roomId: 20,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-44787980/original/97a29184-9623-4e45-867f-6d050049eb5b.jpeg?im_w=1200'
      },
      {
        userId: 3,
        roomId: 21,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46665306/original/bd4d5f73-ab4d-487d-865f-f47446f081a8.jpeg?im_w=720'
      },
      {
        userId: 3,
        roomId: 21,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46665306/original/8e9245ab-d219-43be-88e6-7f1f608df929.jpeg?im_w=720'
      },
      {
        userId: 3,
        roomId: 21,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/0e752aaf-b10c-4f65-a881-29481005f58a.jpg?im_w=720'
      },
      {
        userId: 3,
        roomId: 21,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46665306/original/6e754e3a-07ba-40cd-ae72-d51f2df6fb67.jpeg?im_w=720'
      },
      {
        userId: 3,
        roomId: 21,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46665306/original/772ba654-23ad-494d-b736-fc14539da2bb.jpeg?im_w=1200'
      },
      {
        userId: 3,
        roomId: 22,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53983980/original/0396128f-91ea-482e-81f4-d44ffe460b56.jpeg?im_w=1200'
      },
      {
        userId: 3,
        roomId: 22,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53983980/original/a1b61398-16ee-483f-8a3e-b170c57a8724.jpeg?im_w=720'
      },
      {
        userId: 3,
        roomId: 22,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53983980/original/e083e498-3d61-4f10-8ea2-e03f854aefa7.jpeg?im_w=720'
      },
      {
        userId: 3,
        roomId: 22,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53983980/original/211837b8-1db8-40b0-b38b-f04dcda7c0dc.jpeg?im_w=720'
      },
      {
        userId: 3,
        roomId: 22,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53983980/original/8950b9ed-1bd9-4258-b31e-d577961b2a29.jpeg?im_w=1200'
      },
      {
        userId: 3,
        roomId: 23,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-606739979986167531/original/ef82fd3c-4298-457d-b053-0b694ee1b340.jpeg?im_w=1200'
      },
      {
        userId: 3,
        roomId: 23,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-606739979986167531/original/f1b1908d-462a-4df0-ac86-be08c346b02b.jpeg?im_w=1200'
      },
      {
        userId: 3,
        roomId: 23,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-606739979986167531/original/c6afa7bb-2f00-4406-9e6b-3965ce478be3.jpeg?im_w=720'
      },
      {
        userId: 3,
        roomId: 23,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-606739979986167531/original/89e968ef-23f9-4697-8e06-3d33bfd1b8aa.jpeg?im_w=720'
      },
      {
        userId: 3,
        roomId: 23,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-606739979986167531/original/73830834-4676-4db0-b4c9-36ff738947dc.png?im_w=720'
      },
      {
        userId: 4,
        roomId: 24,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/84c0dcbe-b755-4eb6-b619-2b4ceca0f1a1.jpg?im_w=720'
      },
      {
        userId: 4,
        roomId: 24,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/11d33147-81fd-4628-b308-217d1df4a6de.jpg?im_w=720'
      },
      {
        userId: 4,
        roomId: 24,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/60ba5eea-3ce0-40c4-bb17-aa78016cc94c.jpg?im_w=1200'
      },
      {
        userId: 4,
        roomId: 24,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/ae0f71fb-479c-4c3e-8824-cb05d961424e.jpg?im_w=1200'
      },
      {
        userId: 4,
        roomId: 24,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/90c6dc91-5643-4325-b811-db50aa5ef248.jpg?im_w=720'
      },
      {
        userId: 4,
        roomId: 25,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45868372/original/7651d536-10ad-4fa1-a621-57a08fd0f8a7.jpeg?im_w=720'
      },
      {
        userId: 4,
        roomId: 25,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45868372/original/d9a336aa-4ea0-41db-8cb7-ca99f5f697e0.jpeg?im_w=1200'
      },
      {
        userId: 4,
        roomId: 25,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45868372/original/18805d8d-ceba-40ff-9d50-e2f497907e9b.jpeg?im_w=1200'
      },
      {
        userId: 4,
        roomId: 25,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45868372/original/0f0af454-6428-4e1a-a7a9-1853e65d3e14.jpeg?im_w=720'
      },
      {
        userId: 4,
        roomId: 25,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45868372/original/088253f9-073b-4838-85fb-148207546cb7.jpeg?im_w=720'
      },
      {
        userId: 4,
        roomId: 26,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/226e0806-d270-411a-a2af-fdd399eb4219.jpg?im_w=1200'
      },
      {
        userId: 4,
        roomId: 26,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/132a6785-4da5-4b83-bc75-0c86d515235e.jpg?im_w=720'
      },
      {
        userId: 4,
        roomId: 26,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/4a290563-2742-404e-ab7a-0746bce23c85.jpg?im_w=720'
      },
      {
        userId: 4,
        roomId: 26,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/5a5dbbec-84cc-4c4a-8744-588edd55832e.jpg?im_w=720'
      },
      {
        userId: 4,
        roomId: 26,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/ff012ce1-2cbd-4a5d-85e8-7f27646db92a.jpg?im_w=720'
      },
      {
        userId: 4,
        roomId: 27,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-40824952/original/c819b8e2-6e91-4cf5-a249-d139c36d5c6e.jpeg?im_w=1200'
      },
      {
        userId: 4,
        roomId: 27,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-40824952/original/b48fdacf-20bf-41d0-a98e-2e9e0c4ab88a.jpeg?im_w=720'
      },
      {
        userId: 4,
        roomId: 27,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-40824952/original/f9b15e21-34da-4563-b21a-638cd0016fb1.jpeg?im_w=720'
      },
      {
        userId: 4,
        roomId: 27,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-40824952/original/8d3995e2-3124-400f-8414-39ea3d6b97ab.jpeg?im_w=720'
      },
      {
        userId: 4,
        roomId: 27,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-40824952/original/b2b59ad9-e982-4f46-aa45-6d7076773629.jpeg?im_w=720'
      },
      {
        userId: 6,
        roomId: 28,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-624041229854519565/original/18c99e8d-79a7-49b7-8063-8993007b7df6.jpeg?im_w=1200'
      },
      {
        userId: 6,
        roomId: 28,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-624041229854519565/original/ab0be2b6-f22e-4e97-8a67-686f3b756af8.jpeg?im_w=720'
      },
      {
        userId: 6,
        roomId: 28,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-624041229854519565/original/db9eb164-d39b-48f1-9db9-1520a432edd8.jpeg?im_w=720'
      },
      {
        userId: 6,
        roomId: 28,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-624041229854519565/original/923b2427-a082-4f35-ac57-8d7c3a8394ed.jpeg?im_w=720'
      },
      {
        userId: 6,
        roomId: 28,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-624041229854519565/original/05a92727-1254-41c6-b514-504825988a1e.jpeg?im_w=1200'
      },
      {
        userId: 6,
        roomId: 29,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/94af4029-bd65-4ab7-8b1c-6199874eb65d.jpg?im_w=1200'
      },
      {
        userId: 6,
        roomId: 29,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-6378814/original/cf433e22-6790-4148-9f8b-828a5af29a69.jpeg?im_w=720'
      },
      {
        userId: 6,
        roomId: 29,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-6378814/original/7aa897b8-b3c5-4c08-9294-0a9011a3f889.jpeg?im_w=720'
      },
      {
        userId: 6,
        roomId: 29,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-6378814/original/b2222a31-d6e1-415c-90e4-ae7035e77a26.jpeg?im_w=1200'
      },
      {
        userId: 6,
        roomId: 29,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-6378814/original/d861e05a-f989-4e86-80d0-860c5c1b8151.jpeg?im_w=1200'
      },
      {
        userId: 2,
        roomId: 30,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/a237faca-dc47-457e-896a-020efedf7bbe.jpg?im_w=1200'
      },
      {
        userId: 2,
        roomId: 30,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/d75724c8-a8ba-4ad5-936d-9ba3c6318158.jpg?im_w=720'
      },
      {
        userId: 2,
        roomId: 30,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/7c3f389b-e4c3-4c96-8d46-5f5b97b2277e.jpg?im_w=720'
      },
      {
        userId: 2,
        roomId: 30,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-684393148388750685/original/4d881f10-2af5-4941-9e79-93d4c9ae3f7b.jpeg?im_w=720'
      },
      {
        userId: 2,
        roomId: 30,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-684393148388750685/original/2029112c-db10-4f57-8d22-d7a23abab53a.jpeg?im_w=720'
      },
      {
        userId: 2,
        roomId: 31,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/1927fc0b-eed5-475f-8b40-9890c7c7d313.jpg?im_w=720'
      },
      {
        userId: 2,
        roomId: 31,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/ed883e06-8e2b-4ed9-b98f-4be3dab9f07e.jpg?im_w=720'
      },
      {
        userId: 2,
        roomId: 31,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-32730179/original/dd26e6e0-6023-4b1c-9510-2ee71bf45b55.jpeg?im_w=720'
      },
      {
        userId: 2,
        roomId: 31,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-32730179/original/471b15f3-81a6-4496-9d1e-164e704dad58.jpeg?im_w=720'
      },
      {
        userId: 2,
        roomId: 31,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-32730179/original/1b1059c8-91f6-4a92-8938-89808e0401a8.jpeg?im_w=1200'
      },
      {
        userId: 3,
        roomId: 32,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-619055418016860870/original/10533691-88e0-4889-872c-eca873573c49.jpeg?im_w=1440'
      },
      {
        userId: 3,
        roomId: 32,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-619055418016860870/original/bf342928-5812-4be0-a82b-ce31729dea48.jpeg?im_w=1200'
      },
      {
        userId: 3,
        roomId: 32,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-619055418016860870/original/c8066c2f-886b-4440-8885-af2c75fe8a32.jpeg?im_w=1440'
      },
      {
        userId: 3,
        roomId: 32,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-619055418016860870/original/fed90187-51f7-4838-9719-939d775b4de8.jpeg?im_w=720'
      },
      {
        userId: 3,
        roomId: 32,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-619055418016860870/original/4fb67949-e20e-4f50-b041-bd23dacb4e31.jpeg?im_w=1200'
      },
      {
        userId: 7,
        roomId: 33,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/6a3e485e-d276-46e4-88cd-53d0c7cfb03f.jpg?im_w=1440'
      },
      {
        userId: 7,
        roomId: 33,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/69f545a0-917c-4286-a8c4-0fea92981c4c.jpg?im_w=1440'
      },
      {
        userId: 7,
        roomId: 33,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49118131/original/277aed14-970b-4f1f-98b5-7cf41906d053.jpeg?im_w=1200'
      },
      {
        userId: 7,
        roomId: 33,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/ac71af4b-94cf-4a83-86a8-4684b7d74358.jpg?im_w=1440'
      },
      {
        userId: 7,
        roomId: 33,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/28cbef4f-2dfa-488d-a8c0-57af1e507675.jpg?im_w=1440'
      },
      {
        userId: 2,
        roomId: 34,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36165132/original/64a7e292-1cf6-4653-a6e3-75dd196038b7.jpeg?im_w=1200'
      },
      {
        userId: 2,
        roomId: 34,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/ada182a0-cc7e-4e6c-b0f3-d933a602b290.jpg?im_w=720'
      },
      {
        userId: 2,
        roomId: 34,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/ec8a3c99-b634-4118-8839-7ab58598441e.jpg?im_w=720'
      },
      {
        userId: 2,
        roomId: 34,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/daa33901-7508-4844-b539-1ce12dcd6cb3.jpg?im_w=720'
      },
      {
        userId: 2,
        roomId: 34,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/5b2409c9-be88-4bcc-a671-ecc5ac266bdf.jpg?im_w=720'
      },
      {
        userId: 6,
        roomId: 35,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/8ec73873-4fbc-412c-8377-7b7fc8c8a4ec.jpg?im_w=1200'
      },
      {
        userId: 6,
        roomId: 35,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/71242c05-4764-47a3-8c74-facf6b7559c2.jpg?im_w=720'
      },
      {
        userId: 6,
        roomId: 35,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/7dc17c7d-6c1f-450b-99fb-67a037ded60c.jpg?im_w=720'
      },
      {
        userId: 6,
        roomId: 35,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/de3b47ee-aa24-474d-8a4c-f3e8fa8d901d.jpg?im_w=720'
      },
      {
        userId: 6,
        roomId: 35,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/2fc9097d-89df-49de-97ea-baf0beea7afe.jpg?im_w=720'
      },
      {
        userId: 6,
        roomId: 36,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/02d5d74c-bc23-4217-87a5-2bf330d85b23.jpg?im_w=1200'
      },
      {
        userId: 6,
        roomId: 36,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/96c9671b-f2f7-4c23-a283-22b63d6e1630.jpg?im_w=1440'
      },
      {
        userId: 6,
        roomId: 36,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/7c863af7-37e8-4585-9736-55114a74056e.jpg?im_w=1440'
      },
      {
        userId: 6,
        roomId: 36,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/1e12bc8b-cc19-4feb-9354-04b1b644daa3.jpg?im_w=1440'
      },
      {
        userId: 6,
        roomId: 36,
        type: 'room',
        url: 'https://a0.muscache.com/im/pictures/1c6390de-459c-4ebb-b342-9a1dc46d7fda.jpg?im_w=1440'
      },
    ], {});

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
