const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //Retrieving Todos from Db
    db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    //db.collection('Todos').find({_id: new ObjectID('5b4ee5d45a737458f8ada275')}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //Retrieving Users from Db
    db.collection('Users').find({name: 'Hugo Martinez'}).toArray().then((docs) => {    
        console.log('Users with Hugo Martinez name');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //db.close();
})