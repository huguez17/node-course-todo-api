//const MongoClient = require('mongodb').MongoClient;

//Destructuring/Extracting vars from objects in ECMA Script 6
/* var user = {name: 'Andrew', age: 25};
var {name} = user;
console.log(name); */

const {MongoClient, ObjectID} = require('mongodb');

//Crating Object Ids
/* var obj = new ObjectID();
console.log(obj); */

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    /* db.collection('Todos').insertOne({
        text: 'My Text to insert!'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }    

        console.log(JSON.stringify(result.ops, undefined, 2))
    }); */

    /* db.collection('Users').insertOne({
        name: 'Paco Martinez',
        age: 38,
        location: 'Bilbao, Spain'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }    

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    }); */

    db.close();
})