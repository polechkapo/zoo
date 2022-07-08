const adminCabApiRout = require('express').Router();
const { Tariff } = require('../../db/models');

adminCabApiRout.route('/edit')
  .put(async (req, res) => {
    const { arr1, arr2, arr3 } = req.body;
    const tarif = await Tariff.findAll();
    tarif.map((el, i) => el.price = Number(arr3[i]));
    tarif.map((el, i) => el.human_type = arr2[i]);
    tarif.map((el, i) => el.day_type = arr1[i]);
    tarif.map((el) => el.save());
    return res.send('ok');
  });

module.exports = adminCabApiRout;
