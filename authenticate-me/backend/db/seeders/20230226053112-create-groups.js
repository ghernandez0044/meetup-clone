'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}
options.tableName = 'Groups'

const groups = [
  {
    organizerId: 1,
    name: 'Group1',
    about: 'About description1',
    type: 'Online',
    private: true,
    city: 'San Francisco',
    state: 'California'
  },
  {
    organizerId: 2,
    name: 'Group2',
    about: 'About description2',
    type: 'Online',
    private: true,
    city: 'Oakland',
    state: 'California'
  },
  {
    organizerId: 3,
    name: 'Group3',
    about: 'About description3',
    type: 'Online',
    private: true,
    city: 'Las Vegas',
    state: 'Nevada'
  },
  {
    organizerId: 4,
    name: 'Group4',
    about: 'About description4',
    type: 'Online',
    private: true,
    city: 'Seattle',
    state: 'Washington'
  },
  {
    organizerId: 5,
    name: 'Group5',
    about: 'About description5',
    type: 'Online',
    private: true,
    city: 'New York',
    state: 'New York'
  },
  {
    organizerId: 6,
    name: 'Group6',
    about: 'About description6',
    type: 'Online',
    private: true,
    city: 'Miami',
    state: 'Florida'
  },
  {
    organizerId: 7,
    name: 'Group7',
    about: 'About description7',
    type: 'In Person',
    private: false,
    city: 'Dallas',
    state: 'Texas'
  },
  {
    organizerId: 8,
    name: 'Group8',
    about: 'About description8',
    type: 'In Person',
    private: false,
    city: 'Chicago',
    state: 'Illinois'
  },
  {
    organizerId: 9,
    name: 'Group9',
    about: 'About description9',
    type: 'In Person',
    private: false,
    city: 'Atlanta',
    state: 'Georgia'
  },
  {
    organizerId: 10,
    name: 'Group10',
    about: 'About description10',
    type: 'In Person',
    private: false,
    city: 'Los Angeles',
    state: 'California'
  },
  {
    organizerId: 11,
    name: 'Group11',
    about: 'About description11',
    type: 'In Person',
    private: true,
    city: 'Sacramento',
    state: 'California'
  },
  {
    organizerId: 12,
    name: 'Group12',
    about: 'About description12',
    type: 'Online',
    private: false,
    city: 'Berkeley',
    state: 'California'
  },
  {
    organizerId: 13,
    name: 'Group13',
    about: 'About description13',
    type: 'In Person',
    private: false,
    city: 'San Francisco',
    state: 'California'
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

    await queryInterface.bulkInsert(options, groups, {})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(options, groups, {})
  }
};
