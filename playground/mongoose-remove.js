const{ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove({_id: '5bd38749cbffd8dcb6cd4aae'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5bd38749cbffd8dcb6cd4aae').then((todo) => {
    console.log(todo);
});