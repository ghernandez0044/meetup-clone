'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}
options.tableName = 'EventImages'

const eventImages = [
  {
    eventId: 1,
    url: 'www.url.com',
    preview: true
  },
  {
    eventId: 2,
    url: 'www.url.com',
    preview: true
  },
  {
    eventId: 3,
    url: 'www.url.com',
    preview: true
  },
  {
    eventId: 4,
    url: 'www.url.com',
    preview: true
  },
  {
    eventId: 5,
    url: 'www.url.com',
    preview: true
  },
  {
    eventId: 6,
    url: 'www.url.com',
    preview: true
  },
  {
    eventId: 7,
    url: 'www.url.com',
    preview: true
  },
  {
    eventId: 8,
    url: 'www.url.com',
    preview: true
  },
  {
    eventId: 9,
    url: 'www.url.com',
    preview: true
  },
  {
    eventId: 10,
    url: 'www.url.com',
    preview: true
  },
  {
    eventId: 11,
    url: 'www.url.com',
    preview: true
  },
  {
    eventId: 12,
    url: 'www.url.com',
    preview: true
  },
  {
    eventId: 13,
    url: 'www.url.com',
    preview: true
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
   await queryInterface.bulkInsert(options, eventImages, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
   await queryInterface.bulkDelete(options, eventImages, {})
  }
};
