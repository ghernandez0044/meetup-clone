'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}
options.tableName = 'Attendances'

const attendances = [
  {
    eventId: 1,
    userId: 1,
    status: 'attending'
  },
  {
    eventId: 2,
    userId: 2,
    status: 'attending'
  },
  {
    eventId: 3,
    userId: 3,
    status: 'attending'
  },
  {
    eventId: 4,
    userId: 4,
    status: 'attending'
  },
  {
    eventId: 5,
    userId: 5,
    status: 'attending'
  },
  {
    eventId: 6,
    userId: 6,
    status: 'attending'
  },
  {
    eventId: 7,
    userId: 7,
    status: 'attending'
  },
  {
    eventId: 8,
    userId: 8,
    status: 'attending'
  },
  {
    eventId: 9,
    userId: 9,
    status: 'attending'
  },
  {
    eventId: 10,
    userId: 10,
    status: 'attending'
  },
  {
    eventId: 11,
    userId: 11,
    status: 'attending'
  },
  {
    eventId: 12,
    userId: 12,
    status: 'attending'
  },
  {
    eventId: 13,
    userId: 13,
    status: 'attending'
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert(options, attendances, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
   await queryInterface.bulkDelete(options, attendances, {})
  }
};
