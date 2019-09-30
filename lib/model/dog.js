const mongoose = require('mongoose');
const { Schema } = mongoose;

const dogSchema = new Schema ({
  breed: {
    type: String,
    required: true
  },
  temperment: {
    type: String,
  },
  group: [{
    type: String,
    enum: ['Working', 'Sporting', 'Foundation Stock Service', 'Hound', 'Terrier', 'Toy', 'Herding', 'Non-Sporting']
  }],
  countryOfOrigin: {
    type: String,
  },
  lifespan: {
    type: Number,
    min: 0,
    max: 25
  },
  hypoallergenic: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Dog', dogSchema);