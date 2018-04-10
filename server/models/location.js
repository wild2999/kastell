const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  lat: {
    type: Number
  },
  lng: {
    type: Number
  }
});

mongoose.model('Location', LocationSchema);