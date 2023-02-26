'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}
options.tableName = 'GroupImages'

const groupImages = [
  {
    groupId: 1,
    url: 'www.url.com',
    preview: true
  },
  {
    groupId: 2,
    url: 'www.url.com',
    preview: true
  },
  {
    groupId: 3,
    url: 'www.url.com',
    preview: true
  },
  {
    groupId: 4,
    url: 'www.url.com',
    preview: true
  },
  {
    groupId: 5,
    url: 'www.url.com',
    preview: true
  },
  {
    groupId: 6,
    url: 'www.url.com',
    preview: true
  },
  {
    groupId: 7,
    url: 'www.url.com',
    preview: true
  },
  {
    groupId: 8,
    url: 'www.url.com',
    preview: true
  },
  {
    groupId: 9,
    url: 'www.url.com',
    preview: true
  },
  {
    groupId: 10,
    url: 'www.url.com',
    preview: true
  },
  {
    groupId: 11,
    url: 'www.url.com',
    preview: true
  },
  {
    groupId: 12,
    url: 'www.url.com',
    preview: true
  },
  {
    groupId: 13,
    url: 'www.url.com',
    preview: true
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
   await queryInterface.bulkInsert(options, groupImages, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(options, groupImages, {})
  }
};
