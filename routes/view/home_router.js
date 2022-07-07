const homeRouter = require('express').Router();
const { Admin } = require('../../db/models');
const Home = require('../../views/Home');

homeRouter.route('/')
  .get(async (req, res) => {
    res.renderComponent(Home, {});
  });

module.exports = homeRouter;
