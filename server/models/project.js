const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  images: {
    type: Array,
    default: []
  },
  title: {
    type: String,
    default: ''
  },
  titleDescription: {
    type: String,
    default: ''
  },
  textDescription: {
    type: String,
    default: ''
  },
  description: {
    type: Array,
    default: []
  }
});

mongoose.model('Project', ProjectSchema);