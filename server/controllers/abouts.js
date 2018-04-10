const mongoose = require('mongoose');

const About = mongoose.model('About');

const getAbout = (req, res) => {
  About.find({}).then(about => {
    res.send({about});
  })
};

module.exports = {
  getAbout
};