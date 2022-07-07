'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    
    static associate({Admin, Photo}) {
      Animal.belongsTo(Admin, {foreignKey:'admin_id'})
      Animal.hasMany(Photo, {foreignKey: 'id'})
    }
  }
  Animal.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    desc: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    admin_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Admins',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Animal',
    tableName: 'Animals'
  });
  return Animal;
};
