const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  team: {
    type: Array
  },
  about: {
    type: Object
  },
  choose: {
    type: Object
  }
});

mongoose.model('About', AboutSchema);