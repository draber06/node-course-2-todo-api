// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({ name: 'Alexey Eremin' });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5c1e9f614be2b6ba44e7551b')
    }).then((result) => console.log(JSON.stringify(result, undefined, 2)));

    db.close();
});