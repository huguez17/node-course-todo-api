const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');    

    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5b4ee61e66b3134ff80ac561')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete todos', err);
    });    

    //findOneAndUpdate 
    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5b4ee8c14833f512688e9325')
    }, {
        $set: {
            name: 'Andrew'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete users', err);
    });   

    //db.close();
})