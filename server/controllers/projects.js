const mongoose = require('mongoose');

const Project = mongoose.model('Project');

const getProjects = (req, res) => {
  Project.find({}).then(projects => {
    res.send({projects});
  })
};

const getProjectById = (req, res) => {
  const {_id} = req.query;
  Project.findById(_id)
    .then(project => {
      res.send({project});
    });
};

module.exports = {
  getProjects,
  getProjectById
};