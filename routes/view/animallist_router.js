const animalsRouter = require('express').Router();
const { Animal } = require('../../db/models');
const AnimalList = require('../../views/AnimalList');

animalsRouter.route('/')
  .get(async (req, res) => {
    const animals = await Animal.findAll();
    res.renderComponent(AnimalList, { animals });
  });

animalsRouter.route('/:id/info')
  .get(async (req, res) => {
    const animalId = req.params.id;
    const animal = await Animal.findByPk(animalId);
    res.renderComponent(Animal, { animal });
  });

module.exports = animalsRouter;
