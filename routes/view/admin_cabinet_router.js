const AdminCabinetRouter = require('express').Router();

AdminCabinetRouter.route('/')
  .get((req, res) => {
    res.renderComponent();
  })
  .post((req, res) => {

  });

module.exports = AdminCabinetRouter;
