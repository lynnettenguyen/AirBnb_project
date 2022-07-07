'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rooms', [
      {
        ownerId: 1,
        address: '3376 Lake Tahoe Blvd',
        city: 'South Lake Tahoe',
        state: 'California',
        country: 'United States of America',
        lat: 39.068288,
        lng: 120.129129,
        name: '7 Sierra Shores Cozy Lakefront Home',
        description: 'Enjoy the accommodations of Sierra Shores, a major resort like paradise, private and comfy. Our large, high-end, 3 bedroom, 3 bath townhouse is right on the lake! This property is among the highest end lakefront properties in the entire Lake Tahoe area.',
        price: 1494,
      },
      {
        ownerId: 2,
        address: '1 Boulevard de la Menara',
        city: 'Hivernage',
        state: 'Marrakesh',
        country: 'Morocco',
        lat: 31.618189,
        lng: 8.015056,
        name: 'Luxury Room in the Heart of the Medina',
        description: 'A unique Riad in the medina, perfectly located a few minutes from the Ben Youssef Medrassa, souks and Jemaa el fna square. This property is a real image of modernity and tradition with excellent service.',
        price: 58,
      },
      {
        ownerId: 3,
        address: '37 Lower Simcoe Street',
        city: 'Toronto',
        state: 'Ontario',
        country: 'Canada',
        lat: 43.642107,
        lng: 79.383903,
        name: 'Brand New Downtown Condo with Large Balcony',
        description: 'Brand new modern and stylish condo in the heart of downtown Toronto. Large balcony with view of the lake. 3 minutes walking distance to Rogers Centre, Scotiabank Arena, CN Tower, Aquarium and Waterfront harbors.',
        price: 282,
      },
      {
        ownerId: 2,
        address: '204 Big Sky Way',
        city: 'Joshua Tree',
        state: 'California',
        country: 'United States of America',
        lat: 38.050152,
        lng: -121.339526,
        name: 'The Kellogg Doolittle House',
        description: 'Created over 25 meticulous years, Kellogg Doolittle in Joshua Tree National Park is a marvel of the organic architecture movement. It is one of the most exclusive homes in the world, and available for the first time as an Airbnb Luxe exclusive.',
        price: 12500,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Rooms', {
      address: { [Op.in]: ['3376 Lake Tahoe Blvd', '1 Boulevard de la Menara', '37 Lower Simcoe Street'] }
    }, {});
  }
};
