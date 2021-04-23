'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bundle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bundle.belongsToMany(models.Customer, { through: models.Transaction })
    }
    getName(str){
      return `${this.name} ${str}`
    }
  };
  Bundle.init({
    price: DataTypes.INTEGER,
    name: DataTypes.STRING,
    is_parfum: DataTypes.BOOLEAN,
    is_setrika: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Bundle',
  });
  return Bundle;
};