'use strict';
const seedMatriculas = require('../../arquivos-base/seederMatriculas.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('matriculas', seedMatriculas, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('matriculas', null, {});
  }
};
