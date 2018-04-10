const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SlideSchema = new Schema({
  title: {
    type: String,
    default: ''
  },
  src: {
    type: String,
    trim: true,
    default: ''
  }
});

mongoose.model('Slide', SlideSchema);