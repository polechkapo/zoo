'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Tariffs', [{
      day_type: 'Будни',
      human_type: 'Детский',
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      day_type: 'Будни',
      human_type: 'Взрослый',
      price: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      day_type: 'Выходной',
      human_type: 'Детский',
      price: 150,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      day_type: 'Выходной',
      human_type: 'Взрослый',
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Tariffs', null, {});
  }
};
