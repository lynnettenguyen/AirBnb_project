# Welcome to [WhereBnb](https://lynnette-airbnb.herokuapp.com/), a clone of AirBnb

WhereBnb provides lodging and vacation rentals around the world, wherever you want to go!

##  Languages, Frameworks, Platforms and Libraries
### Backend
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
### Frontend
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
### Database
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
### ORM
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
### Hosting
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Wiki Links
- [Database Schema](https://github.com/lynnettenguyen/airBnb_project/wiki/Database-Schema)
- [Redux State Shape](https://github.com/lynnettenguyen/airBnb_project/wiki/Redux-State-Shape)
- [Features](https://github.com/lynnettenguyen/airBnb_project/wiki/Features-List)

## Landing Page
![Landing](https://user-images.githubusercontent.com/98368183/182081886-ed25a8e4-f161-4169-ac9f-fe61832a97a0.png)

## Search by Destination
![](https://user-images.githubusercontent.com/98368183/192408997-5e99a122-8ea1-4b70-8c43-b60430b55315.png)


## Listing
![Listing](https://user-images.githubusercontent.com/98368183/182081895-660ac093-2907-4354-937a-ce8cf75115be.png)

## Trips
![Trips](https://user-images.githubusercontent.com/98368183/182081906-a03dce1c-2c1f-4239-8cd8-cf842fccf1b6.png)

## Manage Listings
![Manage](https://user-images.githubusercontent.com/98368183/182081953-91fc1c61-c567-4192-b115-d922d3200881.png)

## Host your Home
![Host](https://user-images.githubusercontent.com/98368183/182081916-edf00c58-defe-4653-a02e-deceb21b5faa.png)

### Steps to Run Locally
- Clone the repository: ```git clone https://github.com/lynnettenguyen/whereBnb.git```
- Install and run npm dependencies in two separate terminals for frontend and backend: ```npm install``` and then ```npm start```
- Add backend environment variables:
```js
// .env
PORT=8000
DB_FILE=db/dev.db
JWT_SECRET=INSERT-PASSWORD-HERE
JWT_EXPIRES_IN=604800
```
- Setup backend database: ```npx dotenv sequelize db:migrate``` and ```npx dotenv sequelzie db:seed:all```
- Navigate to [localhost:3000](http://localhost:3000/)
