const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate({ Animal }) {
      Photo.belongsTo(Animal, { foreignKey: 'animal_id' });
    }
  }
  Photo.init({
    animal_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Animals',
        key: 'id',
      },
    },
    img_href: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Photo',
    tableName: 'Photos',
  });
  return Photo;
};
