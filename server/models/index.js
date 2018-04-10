const mongoose = require('mongoose');
const { mongodb } = require('../../server.config');

mongoose.Promise = global.Promise;
mongoose.connect(mongodb, () => console.log('Connection to MongoDB established'));

require('./location');
require('./project');
require('./slide');
require('./about');