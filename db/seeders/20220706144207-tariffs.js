'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Tariffs', [{
      day_type: 'weekday',
      human_type: 'child',
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      day_type: 'weekday',
      human_type: 'adult',
      price: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      day_type: 'weekend',
      human_type: 'child',
      price: 150,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      day_type: 'weekend',
      human_type: 'adult',
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Tariffs', null, {});
  }
};
