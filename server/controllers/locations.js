const mongoose = require('mongoose');

const Location = mongoose.model('Location');

const getLocation = (req, res) => {
  Location.find({}).then(location => {
    res.send({location});
  })
};

module.exports = {
  getLocation
};