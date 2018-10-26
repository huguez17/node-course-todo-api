var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(proces.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

mongoose.connect('mongodb://heroku_qg25gg7g:Lays1712@ds153657.mlab.com:53657/heroku_qg25gg7g');

module.exports = {
    mongoose: mongoose
};