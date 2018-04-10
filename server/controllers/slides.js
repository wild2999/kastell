const mongoose = require('mongoose');

const Slide = mongoose.model('Slide');

const getSlides = (req, res) => {
  Slide.find({}).then(slides => {
    res.send({slides});
  })
};

module.exports = {
  getSlides
};