'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    
    static associate({Admin, Photo}) {
      Animal.belongsTo(Admin, {foreignKey:'admin_id', onDelete: 'cascade'})
      Animal.hasMany(Photo, {foreignKey: 'id', onDelete: 'cascade'})
    }
  }
  Animal.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
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
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Animal',
    tableName: 'Animals'
  });
  return Animal;
};
