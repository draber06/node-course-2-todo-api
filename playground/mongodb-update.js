// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5c1e99f74be2b6ba44e75475")
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => console.log(result));

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('5c1d81894dd96324b006a34b')
        }, {
            $set: {
                name: 'Alexey'
            },
            $inc: {
                age: +4
            }
        }, {
            returnOriginal: false
        }).then((result) => console.log(result));

    db.close();
});