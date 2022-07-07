const animalsRouter = require('express').Router();
const { Animal, Admin, Photo } = require('../../db/models');
const AnimalList = require('../../views/AnimalList');
const Card = require('../../views/Animal');
const EditForm = require('../../views/EditForm');

animalsRouter.route('/')
  .get(async (req, res) => {
    const animals = await Animal.findAll({ raw: true });
    const photosAll = await Photo.findAll();

    const photosList = photosAll.filter((item) => item.img_href.includes('1'));

    res.renderComponent(AnimalList, { animals, photosList });
  });

animalsRouter.route('/:id/info')
  .get(async (req, res) => {
    const animalId = req.params.id;
    const animal = await Animal.findByPk(animalId);
    res.renderComponent(Card, { animal });
  });

module.exports = animalsRouter;
