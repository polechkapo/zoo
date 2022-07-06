const tariffRouter = require('express').Router();
const TariffPage = require('../../views/Tariff');
const { Tariff } = require('../../db/models');

tariffRouter.route('/')
  .get(async (req, res) => {
    const tariffs = await Tariff.findAll({raw: true});
    console.log(tariffs);
    res.renderComponent(TariffPage, { tariffs })
  })

  module.exports = tariffRouter;
