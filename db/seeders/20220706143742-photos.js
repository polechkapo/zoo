'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Photos', [{
      animal_id: 1,
      img_href: '/images/Собакотелые-фото1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 1,
      img_href: '/images/Собакотелые-фото2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 1,
      img_href: '/images/Собакотелые-фото3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 1,
      img_href: '/images/Собакотелые-фото4.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 2,
      img_href: '/images/Оленеподобные-фото1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 2,
      img_href: '/images/Оленеподобные-фото2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 2,
      img_href: '/images/Оленеподобные-фото3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 2,
      img_href: '/images/Оленеподобные-фото4.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 3,
      img_href: '/images/Крылатое-фото1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 3,
      img_href: '/images/Крылатое-фото2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 3,
      img_href: '/images/Крылатое-фото3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 3,
      img_href: '/images/Крылатое-фото4.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 4,
      img_href: '/images/Кошачевидные-фото1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 4,
      img_href: '/images/Кошачевидные-фото2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 4,
      img_href: '/images/Кошачевидные-фото3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 4,
      img_href: '/images/Кошачевидные-фото4.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 5,
      img_href: '/images/Конеутки-фото1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 5,
      img_href: '/images/Конеутки-фото2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 5,
      img_href: '/images/Конеутки-фото3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 5,
      img_href: '/images/Конеутки-фото4.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 6,
      img_href: '/images/Нюхль-фото1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 6,
      img_href: '/images/Нюхль-фото2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 6,
      img_href: '/images/Нюхль-фото3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 6,
      img_href: '/images/Нюхль-фото4.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 7,
      img_href: '/images/Тигр-фото1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 7,
      img_href: '/images/Тигр-фото2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 7,
      img_href: '/images/Тигр-фото3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 7,
      img_href: '/images/Тигр-фото4.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 8,
      img_href: '/images/Горилла-фото1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 8,
      img_href: '/images/Горилла-фото2.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 8,
      img_href: '/images/Горилла-фото3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 8,
      img_href: '/images/Горилла-фото4.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 9,
      img_href: '/images/Пингвин-фото1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 9,
      img_href: '/images/Пингвин-фото2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 9,
      img_href: '/images/Пингвин-фото3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      animal_id: 9,
      img_href: '/images/Пингвин-фото4.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
