const authRouter = require('express').Router();
const Login = require('../../views/Login');
const { Admin } = require('../../db/models');
const bcrypt = require('bcrypt');

authRouter.route('/login')
  .get((req, res) => {
    res.renderComponent(Login);
  })
  .post(async (req, res) => {
    const { login, password } = req.body;
    const admin = await Admin.findOne({ where: { login } });
    const authOk = bcrypt.compare(password, admin.password);
    
    if (admin && authOk) {
      req.session.admin = admin.id;
      res.redirect('/');
    } else { res.send('Логин или пароль неверны!'); }
  });
authRouter.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('user_sid');
    res.redirect('/');
  });

module.exports = authRouter;
