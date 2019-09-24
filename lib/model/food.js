const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const schema = new Schema ({
  name: {
    type: String,
    required: true
  },
  category: {
      level: String
  },
  countryOfOrigin: {
    type: String,
    required: true
  },
  serving: {
    type: Number,
    required: true
  },
  canBeVegetarian: {
    type: Boolean,
    default: true
  },
  course: [{
    type: String,
    enum: ['entree', 'appetizer', 'soup', 'salad', 'dessert']
  }]
});

module.exports = mongoose.model('Food', schema);