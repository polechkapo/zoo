const AdminCabinetRouter = require('express').Router();
const AdminCabinet = require('../../views/AdminCabinet');
const { Admin } = require('../../db/models');

AdminCabinetRouter.route('/')
  .get(async (req, res) => {
    const adminId = req.session.admin;
    const admin = await Admin.findByPk(adminId, { raw: true });
    res.renderComponent(AdminCabinet, { admin });
  })
  .post((req, res) => {

  });

module.exports = AdminCabinetRouter;
