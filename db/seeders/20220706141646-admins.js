'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const hash = await bcrypt.hash("123", 5);
    await queryInterface.bulkInsert('Admins', [{
      login: 'admin',
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Admins', null, {});
  }
};
