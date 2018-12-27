const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');


// var id = '5c244d1c6a2a1d081c4e4eb4';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// }).catch((e) => console.log(e));

User.findById('5c21a4efb8aca8121c3d3da0').then((user) => {
    if (!user) {
        return console.log('User not found');
    }

    console.log('User', user);
}).catch((e) => console.log(e));
