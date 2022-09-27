'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        firstName: 'Demo',
        lastName: 'User',
        hashedPassword: bcrypt.hashSync('password'),
        profile_url: "https://res.cloudinary.com/dv3qturtv/image/upload/v1663645357/user4.png"
      },
      {
        email: 'Lynnette@user.io',
        firstName: 'Lynnette',
        lastName: 'Nguyen',
        hashedPassword: bcrypt.hashSync('password'),
        profile_url: "https://res.cloudinary.com/dv3qturtv/image/upload/v1663645357/user1.png"
      },
      {
        email: 'Dyllin@user.io',
        firstName: 'Dyllin',
        lastName: 'Nguyen',
        hashedPassword: bcrypt.hashSync('password'),
        profile_url: "https://res.cloudinary.com/dv3qturtv/image/upload/v1663645357/user0.png"
      },
      {
        email: 'Nathan@user.io',
        firstName: 'Nathan',
        lastName: 'Luu',
        hashedPassword: bcrypt.hashSync('password'),
        profile_url: "https://res.cloudinary.com/dv3qturtv/image/upload/v1663645357/user8.png"
      },
      {
        email: 'Kristine@user.io',
        firstName: 'Kristine',
        lastName: 'Nguyen',
        hashedPassword: bcrypt.hashSync('password'),
        profile_url: "https://res.cloudinary.com/dv3qturtv/image/upload/v1663645357/user6.png"
      },
      {
        email: 'Sunny@user.io',
        firstName: 'Sunny',
        lastName: 'Tran',
        hashedPassword: bcrypt.hashSync('password'),
        profile_url: "https://res.cloudinary.com/dv3qturtv/image/upload/v1663645357/user7.png"
      },
      {
        email: 'Vivian@user.io',
        firstName: 'Vivian',
        lastName: 'Tang',
        hashedPassword: bcrypt.hashSync('password'),
        profile_url: "https://res.cloudinary.com/dv3qturtv/image/upload/v1663645357/user5.png"
      },
      {
        email: 'Jannette@user.io',
        firstName: 'Jannette',
        lastName: 'Tran',
        hashedPassword: bcrypt.hashSync('password'),
        profile_url: "https://res.cloudinary.com/dv3qturtv/image/upload/v1663645357/user3.png"
      },
      {
        email: 'Katie@user.io',
        firstName: 'Katie',
        lastName: 'Tran',
        hashedPassword: bcrypt.hashSync('secret password'),
        profile_url: "https://res.cloudinary.com/dv3qturtv/image/upload/v1663645357/user2.png"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
