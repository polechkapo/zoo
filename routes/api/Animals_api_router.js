const animalsApiRouter = require('express').Router();
const { Animal } = require('../../db/models');
const Photo = require('../../db/models/photo');
const fileMW = require('../../middlewares/file');

animalsApiRouter.route('/:id/edit')
  .put(async (req, res) => {
    console.log(req.files);
    const { id, name, desc } = req.body;
    const card = await Animal.findOne({ where: { id } });
    card.name = name,
    card.desc = desc,
    card.save();
    res.status(200).end('/');
});

// animalsApiRouter.post(':id/upload', fileMW.single('photo'), (req, res) => {
//   console.log(req.params.id);
//   try {
//     if (req.file) {
//       res.json(req.file);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = animalsApiRouter;
