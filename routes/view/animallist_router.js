const animalsRouter = require('express').Router();
const { Animal, Admin } = require('../../db/models');
const AnimalList = require('../../views/AnimalList');

animalsRouter.route('/')
  .get(async (req, res) => {
    const animals = await Animal.findAll();
    const adminId = req.session.admin;
    const admin = await Admin.findByPk(adminId, { raw: true });
    console.log('======>', admin);
    res.renderComponent(AnimalList, { animals, admin });
  });

animalsRouter.route('/:id/info')
  .get(async (req, res) => {
    const animalId = req.params.id;
    const animal = await Animal.findByPk(animalId);
    res.renderComponent(Animal, { animal });
  });

module.exports = animalsRouter;
