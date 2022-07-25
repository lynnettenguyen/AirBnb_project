'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        userId: 2,
        roomId: 1,
        stars: 4,
        review: 'What an incredible cabin! Our family of 11 had a great time - the grand-kids loved the game room and theater, the grownups had fun lounging in the living room or sitting out on the deck. Communication with the property manager was easy and fast. Highly recommend!'
      },
      {
        userId: 3,
        roomId: 1,
        stars: 5,
        review: 'Beautiful property nestled in a very prime location! Panoramic views!'
      },
      {
        userId: 2,
        roomId: 6,
        stars: 5,
        review: 'Where do I begin… this cabin in the woods is magical. It is easy to feel one with the surrounding gorgeous nature because of the unique mirrored walls. The hosts were super easy to communicate with and left us a bottle of Prosecco, as well as binoculars for watching wildlife (we saw some birds). Shampoo and conditioner were top notch, and the view from the jacuzzi is pretty unbeatable. It is a unique romantic place well worth the money.'
      },
      {
        userId: 3,
        roomId: 6,
        stars: 5,
        review: 'This place is AMAZING! Wood fired hot tub with a killer view. Looks even better than the pictures. The hosts are very hospitable as well!'
      },
      {
        userId: 7,
        roomId: 1,
        stars: 4,
        review: 'We had a great time! It was crazy snowing while we stayed and the house was really amazing, warm and cozy! Big enough for 12 people ( 6 adults and 6 kids). Everything was super clean and towels were folded like in a hotel room.Everything is well organized in the house and the communication with the host was quick and helpful! '
      },
      {
        userId: 3,
        roomId: 2,
        stars: 5,
        review: 'Magical little escape outside the city, beautifully furnished, very calm with an amazingly visible sky.'
      },
      {
        userId: 1,
        roomId: 2,
        stars: 5,
        review: 'Great place, friendly hospitality and nice service for a getaway trip. Highly recommended!'
      },
      {
        userId: 1,
        roomId: 3,
        stars: 3,
        review: 'Excellent villa in Ubud. Our stay was very smooth from checkin to checkout. The area is really beautiful.'
      },
      {
        userId: 2,
        roomId: 3,
        stars: 5,
        review: 'Wonderful stay. We fell in love with Ubud as this is such a beautiful area. The villa is really great, brand-new, confortable with a large swimming pool. Highly recommended.'
      },
      {
        userId: 2,
        roomId: 5,
        stars: 4,
        review: 'Beautifully renovated cabin with a great deck and wonderful location! We could walk right down to a nearby beach and the marina was less than a 5 minute drive.'
      },
      {
        userId: 3,
        roomId: 5,
        stars: 5,
        review: 'Beautifully renovated cabin with a great deck and wonderful location! We could walk right down to a nearby beach and the marina was less than a 5 minute drive. All super accessible. The cabin is well appointed and tastefully decorated - nice modern/woodsy vibe.'
      },
      {
        userId: 2,
        roomId: 9,
        stars: 5,
        review: 'Hands down one of the most magical places I have ever stayed in. The lake and mountain view are beautiful and the house adds to all the charm with its fireplace, sauna, and beautiful rustic wood interior. The host was very attentive of us and provided us with a fridge full of water, yogurt, and juice. We felt very well looked after. You will not regret staying here!'
      },
      {
        userId: 3,
        roomId: 9,
        stars: 5,
        review: 'If you are looking for everything you could want from a relaxing stay in the lake como area, this is it. At the same time you will have a comfortable residence as well as direct lakeside access without having to go to public beaches. Amazing stay with plenty of amenities!'
      },
      {
        userId: 3,
        roomId: 4,
        stars: 5,
        review: 'The first time I experienced the house, I was blown away by all of the uncompromising details. This is far from living in a museum, though. It is a living, breathing home that continuously unlocks awe.'
      },
      {
        userId: 3,
        roomId: 7,
        stars: 5,
        review: 'Villa Samira was an amazing stay! Our very large group of ladies enjoyed ourselves immensely. The staff was very accommodating and treated us like royalty. The villa was very clean, all of the bedrooms were superior! Thank you Elite Havens for a very enjoyable vacation.'
      },
      {
        userId: 4,
        roomId: 7,
        stars: 5,
        review: 'Villa Samira is really suitable for relaxing, nice view, good weather and cool breeze, We can lay down near the pool for all night long with the whole family. This is the happy time and time fly.'
      },
      {
        userId: 1,
        roomId: 7,
        stars: 4,
        review: 'To the team at Villa Samira, We enjoy our great stay here. Your warm welcome and hospitality is really touching. Thanks a million for your sweet, kind & professional service. Keep up the good work & spirit.'
      },
      {
        userId: 1,
        roomId: 8,
        stars: 4,
        review: 'We absolutely LOVED the house, location and staff at Enclave 7. It was perfect for an adults getaway and we had a fantastic time celebrating my birthday there.I would highly recommend staying at the home as the beach is beautiful and the home is beautiful.'
      },
      {
        userId: 2,
        roomId: 8,
        stars: 4,
        review: 'We had the best time. Amazing house for a big group of people, awesome location(right on the beach and close to the airport), and excellent recommendations for food, etc. Thank you!'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
