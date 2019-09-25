require('dotenv').config();
const connect = require('./lib/connect');
const mongoose = require('mongoose');

connect();

const Food = require('./lib/model/food');

Food.create({
  name: 'Kimbap',
  category: {
    level: 'easy'
  },
  countryOfOrigin: 'Korea',
  servings: 1,
  canBeVegetarian: true,
  course: ['entree'],
})

  .then(createdFood => {
    console.log(createdFood);
  })
  .then(() => {
    mongoose.disconnect();
  });