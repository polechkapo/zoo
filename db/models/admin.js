'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {   
    static associate({Animal}) {
      Admin.hasMany(Animal, {foreignKey: 'id', onDelete: 'cascade'})
    }
  };
  Admin.init({
    login: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Admin',
    tableName: 'Admins'
  });
  return Admin;
};
