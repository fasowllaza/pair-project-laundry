'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    getAddress() {
      return `${this.address}, Indonesia`
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsToMany(models.Bundle, { through: models.Transaction })
    }
  };
  Customer.init({
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    noMobilePhone: DataTypes.STRING,
    dateIn: DataTypes.DATEONLY,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(ins, opt) {
        ins.noMobilePhone = ins.noMobilePhone.split('0').join('+62');
      },
      beforeUpdate: function(ins, opt) {
        ins.noMobilePhone = ins.noMobilePhone.split('0').join('+62');
      }
    },
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};