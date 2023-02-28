'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}
options.tableName = 'Memberships'

const memberships = [
  {
    userId: 1,
    groupId: 1,
    status: 'pending'
  },
  {
    userId: 2,
    groupId: 2,
    status: 'pending'
  },
  {
    userId: 3,
    groupId: 3,
    status: 'pending'
  },
  {
    userId: 4,
    groupId: 4,
    status: 'pending'
  },
  {
    userId: 5,
    groupId: 5,
    status: 'pending'
  },
  {
    userId: 6,
    groupId: 6,
    status: 'pending'
  },
  {
    userId: 7,
    groupId: 7,
    status: 'member'
  },
  {
    userId: 8,
    groupId: 8,
    status: 'member'
  },
  {
    userId: 9,
    groupId: 9,
    status: 'member'
  },
  {
    userId: 10,
    groupId: 10,
    status: 'member'
  },
  {
    userId: 11,
    groupId: 11,
    status: 'member'
  },
  {
    userId: 12,
    groupId: 12,
    status: 'member'
  },
  {
    userId: 13,
    groupId: 13,
    status: 'member'
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
   await queryInterface.bulkInsert(options, memberships, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
   await queryInterface.bulkDelete(options, memberships, {})
  }
};
