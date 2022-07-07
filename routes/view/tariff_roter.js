const tariffRouter = require('express').Router();
const TariffPage = require('../../views/Tariff');
const { Tariff } = require('../../db/models');

tariffRouter.route('/')
  .get(async (req, res) => {
    const tariff = await Tariff.findAll({ raw: true });
    res.renderComponent(TariffPage, { tariff });
  });

module.exports = tariffRouter;
