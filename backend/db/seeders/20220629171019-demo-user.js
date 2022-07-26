'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        firstName: 'Demo',
        lastName: 'User',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'test@user.io',
        firstName: 'Test',
        lastName: 'UserOne',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'test@user2.io',
        firstName: 'Test',
        lastName: 'UserTwo',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'test@user3.io',
        firstName: 'Test',
        lastName: 'UserThree',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'demo4@user.io',
        firstName: 'Four',
        lastName: 'Person',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'demo5@user.io',
        firstName: 'Five',
        lastName: 'Person',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'john.smith@gmail.com',
        firstName: 'John',
        lastName: 'Smith',
        hashedPassword: bcrypt.hashSync('secret password')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      email: { [Op.in]: ['demo@user.io', 'user1@user.io', 'user2@user.io'] }
    }, {});
  }
};
