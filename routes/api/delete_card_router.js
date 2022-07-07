const deleteCardRout = require('express').Router();

const {
  Animal
} = require('../../db/models');

deleteCardRout.route('/:id')
  .delete(async (req, res) => {
    console.log(req.params);
    try {
      await Animal.destroy({
        where: {
          id: req.params.id
        }
      })
      res.json({
        status: 'ok'
      });
    } catch {
      res.json({
        status: 'DB not answer'
      });
    };
  });
  
module.exports = deleteCardRout;
