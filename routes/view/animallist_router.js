const animalsRouter = require('express').Router();
const { Animal } = require('../../db/models');
const { Photo } = require('../../db/models');
const AnimalList = require('../../views/AnimalList');
const Card = require('../../views/Animal');
const EditForm = require('../../views/EditForm');

animalsRouter.route('/')
  .get(async (req, res) => {
    const animals = await Animal.findAll();
    const photosAll = await Photo.findAll();
    const photosList = photosAll.filter(((item) => item.img_href.includes('1')));
    console.log('ANIMALS ==> ', animals);
    console.log('photosList ==> ', photosList);
    res.renderComponent(AnimalList, { animals, photosList });
  });

animalsRouter.route('/:id/info')
  .get(async (req, res) => {
    const animalId = req.params.id;
    const animal = await Animal.findByPk(animalId);
    res.renderComponent(Card, { animal });
  });

animalsRouter.route('/:id/edit')
  .get(async (req, res) => {
    const animalId = req.params.id;
    const animal = await Animal.findByPk(animalId);
    res.renderComponent(EditForm, { animal });
  });

module.exports = animalsRouter;
