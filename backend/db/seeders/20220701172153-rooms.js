'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rooms', [
      {
        ownerId: 1,
        address: '3376 Lake Tahoe Blvd',
        city: 'South Lake Tahoe',
        state: 'California',
        country: 'United States of America',
        latitude: 39.068288,
        longitude: 120.129129,
        name: '7 Sierra Shores Cozy Lakefront Home',
        description: 'Enjoy the accommodations of Sierra Shores, a major resort like paradise, private and comfy. Our large, high-end, 3 bedroom, 3 bath townhouse is right on the lake! This property is among the highest end lakefront properties in the entire Lake Tahoe area.',
        price: 1494,
        numReviews: 30,
        avgStarRating: 4.60
      },
      {
        ownerId: 2,
        address: '1 Boulevard de la Menara',
        city: 'Hivernage',
        state: 'Marrakesh',
        country: 'Morocco',
        latitude: 31.618189,
        longitude: 8.015056,
        name: 'Luxury Room in the Heart of the Medina',
        description: 'A unique Riad in the medina, perfectly located a few minutes from the Ben Youssef Medrassa, souks and Jemaa el fna square. This property is a real image of modernity and tradition with excellent service.',
        price: 58,
        numReviews: 3,
        avgStarRating: 4.30
      },
      {
        ownerId: 3,
        address: '37 Lower Simcoe Street',
        city: 'Toronto',
        state: 'Ontario',
        country: 'Canada',
        latitude: 43.642107,
        longitude: 79.383903,
        name: 'Brand New Downtown Condo with Large Balcony',
        description: 'Brand new modern and stylish condo in the heart of downtown Toronto. Large balcony with view of the lake. 3 minutes walking distance to Rogers Centre, Scotiabank Arena, CN Tower, Aquarium and Waterfront harbors.',
        price: 282,
        numReviews: 102,
        avgStarRating: 4.84
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Rooms', null, {});
  }
};
