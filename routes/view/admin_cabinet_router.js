const AdminCabinetRouter = require('express').Router();
const AdminCabinet = require('../../views/AdminCabinet');
const { Admin, Tariff } = require('../../db/models');

AdminCabinetRouter.route('/')
  .get(async (req, res) => {
    const adminId = req.session.admin;
    const admin = await Admin.findByPk(adminId, { raw: true });
    const tariff = await Tariff.findAll({ raw: true });
    console.log(tariff);
    res.renderComponent(AdminCabinet, { admin, tariff });
  })
  .post((req, res) => {

  });

module.exports = AdminCabinetRouter;
