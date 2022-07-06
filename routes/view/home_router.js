const homeRouter = require('express').Router();
const Home = require('../../views/Home');


homeRouter.route('/')
  .get((req, res) => {
    res.renderComponent(Home, {});
  });

  
  module.exports = homeRouter;
