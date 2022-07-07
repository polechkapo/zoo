const homeRouter = require('express').Router();

homeRouter.route('/')
  .get((req, res) => {
    res.send('tttt');
  })
  .post((req, res) => {

  });

module.exports = homeRouter;
