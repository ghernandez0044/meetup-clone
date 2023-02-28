'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}
options.tableName = 'Venues'

const venues = [
  {
    groupId: 1,
    address: '600 8th Avenue',
    city: 'San Francisco',
    state: 'California',
    lat: 23.2342,
    lng: 123.2313
  },
  {
    groupId: 2,
    address: '500 Central Avenue',
    city: 'Alameda',
    state: 'California',
    lat: 37.771601,
    lng: -122.282149
  },
  {
    groupId: 3,
    address: '511 North Rodeo Drive',
    city: 'Beverly Hills',
    state: 'California',
    lat: 34.072023,
    lng: -118.405879
  },
  {
    groupId: 4,
    address: '207 South 9th Street',
    city: 'Las Vegas',
    state: 'Nevada',
    lat: 36.165677,
    lng: -115.136825
  },
  {
    groupId: 5,
    address: '6109 South St Lawrence Avenue',
    city: 'Chicago',
    state: 'Illinois',
    lat: 41.783375,
    lng: -87.611142
  },
  {
    groupId: 6,
    address: '25 Central Park West',
    city: 'New York',
    state: 'New York',
    lat: 40.770732,
    lng: -73.980579
  },
  {
    groupId: 7,
    address: '409 SW 8th Avenue',
    city: 'Miami',
    state: 'Florida',
    lat: 25.769860,
    lng: -80.207383
  },
  {
    groupId: 8,
    address: '1390 San Jacinto St',
    city: 'Seattle',
    state: 'Washington',
    lat: 23.2342,
    lng: 123.2313
  },
  {
    groupId: 9,
    address: '713 9th St',
    city: 'Atlanta',
    state: 'Georgia',
    lat: 23.2342,
    lng: 123.2313
  },
  {
    groupId: 10,
    address: '689 King Drive',
    city: 'Dallas',
    state: 'Texas',
    lat: 23.2342,
    lng: 123.2313
  },
  {
    groupId: 11,
    address: '129 Freedom Blvd',
    city: 'Oakland',
    state: 'California',
    lat: 23.2342,
    lng: 123.2313
  },
  {
    groupId: 12,
    address: '783 Slauson Blvd',
    city: 'Los Angeles',
    state: 'California',
    lat: 23.2342,
    lng: 123.2313
  },
  {
    groupId: 13,
    address: '345 Hail St',
    city: 'San Francisco',
    state: 'California',
    lat: 23.2342,
    lng: 123.2313
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
   await queryInterface.bulkInsert(options, venues, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(options, venues, {})
  }
};
