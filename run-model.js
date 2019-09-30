require('dotenv').config();
const connect = require('./lib/connect');
const mongoose = require('mongoose');

connect();

const Dog = require('./lib/model/dog');

Dog.create({
  breed: 'Jindo',
  temperment: 'Alert, Intelligent, Bold',
  group: 'Foundation Stock Service',
  countryOfOrigin: 'South Korea',
  lifespan: 14,
  hypoallergenic: false
})

  .then(dogs => {
    console.log(dogs);
  })
  .then(() => {
    mongoose.disconnect();
  });