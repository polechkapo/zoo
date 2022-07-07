'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Photos', [{
      animal_id: 1,
      img_href: '/images/Тигр-фото1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 1,
      img_href: '/images/Тигр-фото2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 1,
      img_href: '/images/Тигр-фото3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 2,
      img_href: '/images/горилла1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 2,
      img_href: '/images/горилла2.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 2,
      img_href: '/images/горилла3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 3,
      img_href: '/images/пин1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 3,
      img_href: '/images/пин2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 3,
      img_href: '/images/пин3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
