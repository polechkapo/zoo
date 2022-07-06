'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Photos', [{
      animal_id: 1,
      img_href: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 1,
      img_href: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 1,
      img_href: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 2,
      img_href: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 2,
      img_href: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 2,
      img_href: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 3,
      img_href: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 3,
      img_href: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 3,
      img_href: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
