const adminCabApiRout = require('express').Router();
// const React = require('react');
const { Tariff, Admin, Animal } = require('../../db/models');
// const { Context } = require('../../middlewares/ssr');

// const { admin } = React.useContext(Context);

adminCabApiRout.route('/edit').put(async (req, res) => {
  const { arr1, arr2, arr3 } = req.body;
  const tarif = await Tariff.findAll({
    order: [['id', 'ASC']],
  });
  tarif.map((el, i) => {
    el.price = Number(arr3[i]);
    el.human_type = arr2[i];
    el.day_type = arr1[i];
    el.save();
  });
  return res.send('ok');
});
adminCabApiRout.route('/:id/edit')
  .put(async (req, res) => {
    const { id } = req.params;
    const { login, pass1 } = req.body;
    const admin = await Admin.findOne({ where: { id } });
    admin.login = login;
    admin.password = pass1;
    admin.save();
    return res.send('ok');
  });

adminCabApiRout.route('/add')
  .put(async (req, res) => {
    const { login, pass1 } = req.body;
    const admin = await Admin.create({
      login,
      password: pass1,
    });
    res.json({ admin });
  });

adminCabApiRout.route('/:id/del')
  .delete(async (req, res) => {
    const { id } = req.params;
    const name = await Admin.findOne({ where: { id } });
    await Admin.destroy({ where: { id } });
    res.send(`${name.login}`);
  });

adminCabApiRout.route('/add/animal')
  .put(async (req, res) => {
    const { admin: a } = req.session;
    const { name, desc } = req.body;
    const animal = await Animal.create({
      name,
      desc,
      admin_id: a,
    });
    // res.json({ animal });
    res.send('ok');
  });

module.exports = adminCabApiRout;
