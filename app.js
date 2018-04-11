require('./server/models');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

const {
  locations: { getLocation },
  slides: { getSlides },
  projects: { getProjects, getProjectById },
  abouts: { getAbout }
} = require('./server/controllers');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/v1/slides', getSlides);
app.get('/api/v1/location', getLocation);
app.get('/api/v1/projects', getProjects);
app.get('/api/v1/project', getProjectById);
app.get('/api/v1/about', getAbout);

app.get('*', (req, res) => res.sendFile(path.resolve('./dist/index.html')));

module.exports = app;

console.log(`Server listens`);