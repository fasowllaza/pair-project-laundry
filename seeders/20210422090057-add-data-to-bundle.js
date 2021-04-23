'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Bundles",[{
      name:"Paket Hemat",
      price: 10000,
      is_parfum: false,
      is_setrika: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:"Paket Murah",
      price: 20000,
      is_parfum: true,
      is_setrika: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:"Paket Mewah",
      price: 50000,
      is_parfum: true,
      is_setrika: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Bundles",null,{})
  }
};
