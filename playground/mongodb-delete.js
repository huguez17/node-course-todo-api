const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //Deleting Todos from Db:

    //deleteMany
    /* db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result);        
    }, (err) => {
        console.log('Unable to delete todos', err);
    }); */

    //deleteOne
    /* db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        console.log(result);        
    }, (err) => {
        console.log('Unable to delete todos', err);
    });     */

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
        console.log(result);        
    }, (err) => {
        console.log('Unable to delete todos', err);
    });    

    //db.close();
})