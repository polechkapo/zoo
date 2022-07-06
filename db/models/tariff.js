'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tariff extends Model {
  
    static associate() {};
  }
  Tariff.init({
    day_type: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    human_type: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Tariff',
    tableName: 'Tariffs'
  });
  return Tariff;
};
