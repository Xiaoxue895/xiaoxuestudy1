'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Colors', [
      { name: 'red', createdAt: new Date(), updatedAt: new Date() },
      { name: 'blue', createdAt: new Date(), updatedAt: new Date() },
      { name: 'yellow', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Colors', {
      name: ['red', 'blue', 'yellow']
    }, {});
  }
};
