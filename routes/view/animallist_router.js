const animalsRouter = require('express').Router();
const { Animal } = require('../../db/models');
const AnimalList = require('../../views/AnimalList');
const AnimalCard = require('../../views/Animal');

animalsRouter.route('/')
  .get(async (req, res) => {
    const animals = await Animal.findAll();
    res.renderComponent(AnimalList, { animals });
  });

animalsRouter.route('/:id/info')
  .get(async (req, res) => {
    const animalId = req.params.id;
    const animal = await Animal.findByPk(animalId);
    // console.log('======>', animal.name)
    res.renderComponent(AnimalCard, { animal });
  });

module.exports = animalsRouter;
