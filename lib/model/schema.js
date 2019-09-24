const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const schema = new Schema ({
  name: {
    type: String,
    required: true
  },
  appearance: {
    hairColor: String,
    eyeColor: String,
    dress: {
      color: String,
      required: true
    }
  },
  movie: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true,
  },
  hasSidekick: {
    type: Boolean,
    default: false
  },
  media: [{
    type: String,
    enum: ['movies', 'tv', 'internet', 'books', 'comics']
  }]
});

module.exports = mongoose.model('Disney Princess', schema);