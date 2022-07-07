const { Animal } = require('../../db/models');

const animalsApiRouter = require('express').Router();

animalsApiRouter.route('/:id/edit')
  .put(async (req, res) => {
    const { id, name, desc } = req.body;
    const card = await Animal.findOne({ where: { id } });
    card.name = name,
    card.desc = desc;
    card.save();
    res.status(200).end('/');
  });

module.exports = animalsApiRouter;
