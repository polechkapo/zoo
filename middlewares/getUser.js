const { Admin } = require('../db/models');

module.exports = async function getUser(req, res, next) {
  const adminId = req.session.admin;
  const admin = adminId && await Admin.findByPk(adminId);
  res.locals.admin = admin;
  next();
};
