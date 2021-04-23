'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transaction.init({
    quantity: DataTypes.INTEGER,
    statusOrder: DataTypes.BOOLEAN,
    CustomerId: DataTypes.INTEGER,
    BundleId: DataTypes.INTEGER
  }, {
    sequelize,
    hooks:{
      beforeCreate:(instance, option)=>{
        console.log(instance);
        console.log("here <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
        if (+instance.BundleId === 1){
          instance.quantity = 5
        }
        else if (+instance.BundleId === 2){
          instance.quantity = 10
        }
        else if (+instance.BundleId === 3){
          instance.quantity = 15
        }
        instance.statusOrder = false
      }
    },
    modelName: 'Transaction',
  });
  return Transaction;
};