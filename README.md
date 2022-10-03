# [WhereBnb](https://where-bnb-app.herokuapp.com/), full-stack application inspired by Airbnb

WhereBnb provides lodging and vacation rentals around the world, wherever you want to go!

##  Languages, Frameworks, Platforms and Libraries
### Backend
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

### Frontend
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) <a href='https://github.com/shivamkapasia0' target="_blank"><img alt='' src='https://img.shields.io/badge/Google_Maps API-100000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=34A853&color=34A853'/></a>

### Hosting
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Wiki Links
- [Database Schema](https://github.com/lynnettenguyen/airBnb_project/wiki/Database-Schema)
- [Redux State Shape](https://github.com/lynnettenguyen/airBnb_project/wiki/Redux-State-Shape)
- [Features](https://github.com/lynnettenguyen/airBnb_project/wiki/Features-List)

## Landing Page
![Landing](https://user-images.githubusercontent.com/98368183/192944793-01b2e42f-5a7d-4915-a7e0-790246997c03.png)

## Search by Destination, Dates, and Guests
![](https://user-images.githubusercontent.com/98368183/193668614-7afa1334-e643-4543-8f88-b8489dfc5bcf.png)

## Filter by Category
![](https://user-images.githubusercontent.com/98368183/192944868-83deea3d-e140-402f-8fcd-c004f3216161.png)

## Listing
![](https://user-images.githubusercontent.com/98368183/192944939-321eb0d4-d84b-4670-9c46-7c48fda7a0da.png)
![](https://user-images.githubusercontent.com/98368183/192944946-a5702bd7-3464-4a0c-a795-c8d8bb05d506.png)

## Trips
![Trips](https://user-images.githubusercontent.com/98368183/192944975-6b64ae3d-2a0a-490e-a7e9-6085e1630daf.png)

## Manage Listings
![Manage](https://user-images.githubusercontent.com/98368183/192945016-1fb3e283-f571-4877-9a72-9f88d19d26d0.png)

## Host your Home
![Host](https://user-images.githubusercontent.com/98368183/182081916-edf00c58-defe-4653-a02e-deceb21b5faa.png)

## Create a review
![](https://user-images.githubusercontent.com/98368183/192949996-328e74ea-e82a-4817-82f9-ae425a012179.png)


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
