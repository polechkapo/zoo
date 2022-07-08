const AdminCabinetRouter = require('express').Router();
const AdminCabinet = require('../../views/AdminCabinet');
const { Admin, Tariff } = require('../../db/models');

AdminCabinetRouter.route('/')
  .get(async (req, res) => {
    const adminId = req.session.admin;
    const allAdmin = await Admin.findAll({ raw: true });
    const adminMod = await Admin.findByPk(adminId, { raw: true });
    const tariff = await Tariff.findAll({
      order: [['id', 'ASC']],
    });
    res.renderComponent(AdminCabinet, { adminMod, tariff, allAdmin });
  })
  .post((req, res) => {

  });

module.exports = AdminCabinetRouter;
