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
        userId: 2,
        roomId: 8,
        stars: 4,
        review: 'We absolutely LOVED the house, location and staff at Enclave 7. It was perfect for an adults getaway and we had a fantastic time celebrating my birthday there.I would highly recommend staying at the home as the beach is beautiful and the home is beautiful.'
      },
      {
        userId: 6,
        roomId: 8,
        stars: 4,
        review: 'We had the best time. Amazing house for a big group of people, awesome location(right on the beach and close to the airport), and excellent recommendations for food, etc. Thank you!'
      },
      {
        userId: 3,
        roomId: 9,
        stars: 5,
        review: 'Hands down one of the most magical places I have ever stayed in. The lake and mountain view are beautiful and the house adds to all the charm with its fireplace, sauna, and beautiful rustic wood interior.'
      },
      {
        userId: 5,
        roomId: 9,
        stars: 5,
        review: 'This is the most incredible, spectacular place on the lake. You will not find a better place for a better price — trust me! The home has everything you need — including air conditioning! We arrived, set our bags down, and were swimming in the lake in front of the property within the first five minutes. A very clear & clean spot on the lake, too! From the back yard we watched the sunset over the top of Bellagio. Beautiful!'
      },
      {
        userId: 2,
        roomId: 10,
        stars: 5,
        review: 'Incredible experience! If you happen to be in this area, this is a must. It is super unique and very new inside and out. Check in and check out process was seamless and host is very helpful. Definitely recommend!'
      },
      {
        userId: 1,
        roomId: 10,
        stars: 4,
        review: 'This place is awesome and cute and the hosts are Super friendly! The room was spotless. It rained when we were there so it was really cozy inside. The cafe also serves really nice food and coffee. Definitely recommend staying here!'
      },
      {
        userId: 7,
        roomId: 10,
        stars: 5,
        review: 'This would be the best place we have stayed and we have traveled the world and stayed at some amazing places. The hosts created a very special place that is so unique and peaceful. The food at the restaurant was amazing which we would rate close a Michelin Star. We would very much highly recommend booking and stay here. Final words WOW what a amazing place!'
      },
      {
        userId: 7,
        roomId: 11,
        stars: 4,
        review: 'This is not just a great place to stay, it is a magical place to disconnect from the outside world and reconnect with each other.'
      },
      {
        userId: 6,
        roomId: 11,
        stars: 5,
        review: 'The reviews speak for themselves. It is such a nice escape to unwind and relax. It is remote, but you do have cell service and are close enough that you can explore surrounding areas like Cullman and Birmingham. We loved the privacy, listening to all the animals while drinking coffee outside, and exploring the property. They have thought of almost everything (extra batteries, toiletries, etc., bikes for riding around the property, etc.) We can’t wait to go back in winter to enjoy the pond more!'
      },
      {
        userId: 1,
        roomId: 12,
        stars: 5,
        review: 'STUNNING villa with authentic architecture and beautifully considered design. The villa provides everything you need to have a fantastic holiday with family or friends - pool, indoor and outdoor kitchen, pingpong table, sound system, hammocks and pool toys!'
      },
      {
        userId: 2,
        roomId: 12,
        stars: 5,
        review: 'My family and I had a wonderful stay in this home. The house is beautiful and the pool is sparkling and quite refreshing on the hot June days. We loved having the outdoor kitchen, and the house was equipped with everything we needed to take advantage of the lovely food available in the local markets. The house is very well located for exploring all of the wonderful nearby towns and for taking longer day trips. We are already looking forward to our return!'
      },
      {
        userId: 2,
        roomId: 13,
        stars: 5,
        review: 'This is a beautiful house in an beautiful location and stunning views. This host was remarkable, available for every need and really made us feel like his personal house guests. Hope to come here again!'
      },
      {
        userId: 5,
        roomId: 13,
        stars: 5,
        review: 'We have stayed in many Airbnb’s over the past few years and we can say, without a doubt, this is the best experience we have ever had. The villa is absolutely stunning, spotlessly clean and every little detail has been thought of. The location is amazing, so close to the beautiful lake and beach; we had so much fun.'
      },
      {
        userId: 6,
        roomId: 13,
        stars: 4,
        review: 'The space was lovely and worked well for our group of two families. The pool area had a great view and was very nice. This would be a lovely place to stay in high season.'
      },
      {
        userId: 6,
        roomId: 14,
        stars: 5,
        review: 'My friends and I had a great time! The house is very tastefully furnished, the garden invites you to relax or have a barbecue in the evening. The city beach is just a few minutes walk away, by Uber you will find some other nice beaches around.'
      },
      {
        userId: 1,
        roomId: 15,
        stars: 5,
        review: 'We came with a party of 6 for my daughters 21st. Everyone stayed comfortably and loved the house. It was super clean and everything worked perfectly. There was also an amazing view where you could see animals and tons of nature. Will definitely be back to this beautiful home. We loved it!!'
      },
      {
        userId: 1,
        roomId: 16,
        stars: 5,
        review: 'The Sea Ranch House is a dream location in the forest, and was exactly what we were looking for in terms of a tranquil, cozy escape, would highly recommend!'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
