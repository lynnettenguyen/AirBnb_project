'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        firstName: 'Demo',
        lastName: 'User',
        // username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        firstName: 'Fake',
        lastName: 'UserOne',
        // username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password1')
      },
      {
        email: 'user2@user.io',
        firstName: 'Fake',
        lastName: 'UserTwo',
        // username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'demo3@user.io',
        firstName: 'Person',
        lastName: 'Three',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'demo4@user.io',
        firstName: 'Four',
        lastName: 'Person',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        email: 'demo5@user.io',
        firstName: 'Five',
        lastName: 'Person',
        hashedPassword: bcrypt.hashSync('password5')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      // username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
      email: { [Op.in]: ['demo@user.io', 'user1@user.io', 'user2@user.io'] }
    }, {});
  }
};
