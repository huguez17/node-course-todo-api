var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Not Working in Heroku :(
//mongoose.connect(proces.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

//Temp commented
//mongoose.connect('mongodb://localhost:27017/TodoApp' || 'mongodb://hma:1712hugoma@ds153657.mlab.com:53657/heroku_qg25gg7g');

mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    mongoose: mongoose
};

