# Welcome to [WhereBnb](https://lynnette-airbnb.herokuapp.com/), a clone of AirBnb

WhereBnb provides lodging and vacation rentals around the world, wherever you want to go!

## Technologies
- Backend: Node.js, Express.js
- Frontend: Javascript, React, Redux
- Database: SQLite
- Design/Styling: HTML, CSS
- Hosting: Heroku

## Wiki Links
- [Database Schema](https://github.com/lynnettenguyen/airBnb_project/wiki/Database-Schema)
- [Redux State Shape](https://github.com/lynnettenguyen/airBnb_project/wiki/Redux-State-Shape)
- [Features](https://github.com/lynnettenguyen/airBnb_project/wiki/Features-List)

## Landing Page
![Landing](https://user-images.githubusercontent.com/98368183/182081886-ed25a8e4-f161-4169-ac9f-fe61832a97a0.png)

## Listing
![Listing](https://user-images.githubusercontent.com/98368183/182081895-660ac093-2907-4354-937a-ce8cf75115be.png)

## Trips
![Trips](https://user-images.githubusercontent.com/98368183/182081906-a03dce1c-2c1f-4239-8cd8-cf842fccf1b6.png)

## Manage Listings
![Manage](https://user-images.githubusercontent.com/98368183/182081953-91fc1c61-c567-4192-b115-d922d3200881.png)

## Host your Home
![Host](https://user-images.githubusercontent.com/98368183/182081916-edf00c58-defe-4653-a02e-deceb21b5faa.png)

### Steps to Run Locally
- Clone the repository: ```git clone git@github.com:lynnettenguyen/whereBnb.git```
- Install and run npm dependencies in the frontend and backend: ```npm install``` and then ```npm start```
- Add environment variables:
```
PORT=8000
DB_FILE=db/dev.db
JWT_SECRET=INSERT-PASSWORD-HERE
JWT_EXPIRES_IN=604800
```
- Setup database in the backend: ```npx dotenv sequelize db:migrate``` and ```npx dotenv sequelzie db:seed:all```
- Navigate to [localhost:3000](http://localhost:3000/)
