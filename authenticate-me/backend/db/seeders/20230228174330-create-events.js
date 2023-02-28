'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}
options.tableName = 'Events'

const events = [
  {
    venueId: 1,
    groupId: 1,
    name: 'Venue1',
    description: 'Venue1 description',
    type: 'Online',
    capacity: 100,
    price: 100,
    startDate: new Date(2024, 0, 1),
    endDate: new Date (2024, 0, 10)
  },
  {
    venueId: 2,
    groupId: 2,
    name: 'Venue2',
    description: 'Venue2 description',
    type: 'Online',
    capacity: 100,
    price: 100,
    startDate: new Date(2024, 0, 11),
    endDate: new Date (2024, 0, 21)
  },
  {
    venueId: 3,
    groupId: 3,
    name: 'Venue3',
    description: 'Venue3 description',
    type: 'Online',
    capacity: 100,
    price: 100,
    startDate: new Date(2024, 0, 22),
    endDate: new Date (2024, 0, 30)
  },
  {
    venueId: 4,
    groupId: 4,
    name: 'Venue4',
    description: 'Venue4 description',
    type: 'Online',
    capacity: 100,
    price: 100,
    startDate: new Date(2024, 1, 1),
    endDate: new Date (2024, 1, 10)
  },
  {
    venueId: 5,
    groupId: 5,
    name: 'Venue5',
    description: 'Venue5 description',
    type: 'Online',
    capacity: 100,
    price: 100,
    startDate: new Date(2024, 1, 11),
    endDate: new Date (2024, 1, 21)
  },
  {
    venueId: 6,
    groupId: 6,
    name: 'Venue6',
    description: 'Venue6 description',
    type: 'Online',
    capacity: 100,
    price: 100,
    startDate: new Date(2024, 1, 22),
    endDate: new Date (2024, 1, 30)
  },
  {
    venueId: 7,
    groupId: 7,
    name: 'Venue7',
    description: 'Venue7 description',
    type: 'In Person',
    capacity: 100,
    price: 100,
    startDate: new Date(2024, 2, 1),
    endDate: new Date (2024, 2, 10)
  },
  {
    venueId: 8,
    groupId: 8,
    name: 'Venue8',
    description: 'Venue8 description',
    type: 'In Person',
    capacity: 100,
    price: 100,
    startDate: new Date(2024, 2, 11),
    endDate: new Date (2024, 2, 20)
  },
  {
    venueId: 9,
    groupId: 9,
    name: 'Venue9',
    description: 'Venue9 description',
    type: 'In Person',
    capacity: 100,
    price: 100,
    startDate: new Date(2024, 3, 1),
    endDate: new Date (2024, 3, 10)
  },
  {
    venueId: 10,
    groupId: 10,
    name: 'Venue10',
    description: 'Venue10 description',
    type: 'In Person',
    capacity: 100,
    price: 100,
    startDate: new Date(2024, 4, 1),
    endDate: new Date (2024, 4, 10)
  },
  {
    venueId: 11,
    groupId: 11,
    name: 'Venue11',
    description: 'Venue11 description',
    type: 'Online',
    capacity: 100,
    price: 100,
    startDate: new Date(2024, 5, 1),
    endDate: new Date (2024, 5, 10)
  },
  {
    venueId: 12,
    groupId: 12,
    name: 'Venue12',
    description: 'Venue12 description',
    type: 'Online',
    capacity: 100,
    price: 100,
    startDate: new Date(2024, 6, 1),
    endDate: new Date (2024, 6, 10)
  },
  {
    venueId: 13,
    groupId: 13,
    name: 'Venue13',
    description: 'Venue13 description',
    type: 'Online',
    capacity: 100,
    price: 100,
    startDate: new Date(2024, 7, 1),
    endDate: new Date (2024, 7, 10)
  },
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
   await queryInterface.bulkInsert(options, events, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(options, events, {})
  }
};
