Navigate to: [ https://lynnette-airbnb.herokuapp.com/api/ ]

git push heroku dev:main
heroku run npm run sequelize db:migrate
heroku run npm run sequelize db:seed:all

## Get the Current User
https://lynnette-airbnb.herokuapp.com/api/profile


# /api/users (sign up)
```js
fetch('/api/users', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  },
  body: JSON.stringify({
    email: 'name@email.com',
    firstName: 'Test',
    lastName: 'User',
    password: 'NewPassword'
  })
}).then(res => res.json()).then(data => console.log(data));
```

## Log In a User
```js
fetch('/api/session', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  },
  body: JSON.stringify({ email: 'john.smith@gmail.com', password: 'secret password' })
}).then(res => res.json()).then(data => console.log(data));
```

## Log Out a User
```js
fetch('/api/session', {
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  }
}).then(res => res.json()).then(data => console.log(data));
```

## Get all Spots
https://lynnette-airbnb.herokuapp.com/api/rooms/

## Get all Spots owned by the Current User
https://lynnette-airbnb.herokuapp.com/api/profile/rooms/

## Get details of a Spot from an id
https://lynnette-airbnb.herokuapp.com/api/rooms/1
```js
// check 404 is returned for spots that do not exist
fetch('/api/rooms/10', {
  method: 'GET',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  }
}).then(res => res.json()).then(data => console.log(data));
```

## Create a Spot
```js
fetch('/api/rooms', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  },
  body: JSON.stringify({
      "address": "123 Disney Lane",
      "city": "San Francisco",
      "state": "California",
      "country": "United States of America",
      "lat": 37.7645358,
      "lng": -122.4730327,
      "name": "App Academy",
      "description": "Place where web developers are created",
      "price": 123
      })
}).then(res => res.json()).then(data => console.log(data));
```

## Edit a Spot
```js
fetch('/api/rooms/5', {
  method: 'PUT',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  },
  body: JSON.stringify({
      "address": "123 Disney Lane",
      "city": "San Francisco",
      "state": "California",
      "country": "United States of America",
      "lat": 37.7645358,
      "lng": -122.4730327,
      "name": "App Academy",
      "description": "Place where web developers are created",
      "price": 123
      })
}).then(res => res.json()).then(data => console.log(data));
```

## Delete a Spot
```js
fetch('/api/rooms/5', {
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  }
}).then(res => res.json()).then(data => console.log(data));
```

## Get all Reviews of the Current User
https://lynnette-airbnb.herokuapp.com/api/profile/reviews

## Get all Reviews by a Spot's id
https://lynnette-airbnb.herokuapp.com/api/rooms/1/reviews
```js
// check 404 is returned for spots that do not exist
fetch('/api/rooms/12/reviews', {
  method: 'GET',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  }
}).then(res => res.json()).then(data => console.log(data));
```

## Create a Review for a Spot based on the Spot's id
```js
fetch('/api/rooms/2/reviews', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  },
  body: JSON.stringify({
      "review": "This was an awesome spot!",
      "stars": 5
      })
}).then(res => res.json()).then(data => console.log(data));
```
## Edit a Review
```js
fetch('/api/reviews/7', {
  method: 'PUT',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  },
  body: JSON.stringify({
      "review": "This was an awesome spot!",
      "stars": 4
      })
}).then(res => res.json()).then(data => console.log(data));
```
## Delete a Review
```js
fetch('/api/reviews/3, {
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  }
}).then(res => res.json()).then(data => console.log(data));
```
## Get all of the Current User's Bookings
https://lynnette-airbnb.herokuapp.com/api/reservations

## Get all Bookings for a Spot based on the Spot's id
https://lynnette-airbnb.herokuapp.com/api/rooms/1/reservations

## Create a Booking from a Spot based on the Spot's id
```js
fetch('/api/rooms/2/reservations', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  },
  body: JSON.stringify({
      "startDate": "2022-11-19",
      "endDate": "2022-11-19",
      })
}).then(res => res.json()).then(data => console.log(data));
```

## Edit a Booking
```js
fetch('/api/rooms/2/reservations/10', {
  method: 'PUT',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  },
  body: JSON.stringify({
      "startDate": "2022-11-18",
      "endDate": "2022-11-18",
      })
}).then(res => res.json()).then(data => console.log(data));
```
## Delete a Booking
```js
fetch('/api/reservations/10', {
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  }
}).then(res => res.json()).then(data => console.log(data));
```

## Add an Image to a Spot based on the Spot's id
```js
fetch('/api/rooms/1/images', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  },
  body: JSON.stringify({
      "url": "test.url",
      })
}).then(res => res.json()).then(data => console.log(data));
```

## Add an Image to a Review based on the Review's id
```js
fetch('/api/rooms/3/reviews/5/images', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  },
  body: JSON.stringify({
      "url": "test.url",
      })
}).then(res => res.json()).then(data => console.log(data));
```

## Delete an Image
```js
fetch('/api/images/13', {
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `9PjAKs6o-iGo7bnsWEP5EWO5sAY5luZhZxTI`
  }
}).then(res => res.json()).then(data => console.log(data));
```

## Add Query Filters to Get All Spots
https://lynnette-airbnb.herokuapp.com/api/rooms?page=1&size=1&minLat=38.6&maxLat=45.6&minLng=69.8&maxLng=112.3&minPrice=1.00&maxPrice=400.00
