const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { Todo } = require('../../models/todo');
const { User } = require('../../models/user');

const UserOneId = new ObjectID();
const UserTwoId = new ObjectID();
const users = [{
    _id: UserOneId,
    email: 'alexei@example.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: UserOneId, access: 'auth' }, process.env.JWT_SECRET).toString()
    }]
}, {
    _id: UserTwoId,
    email: 'ann@example.com',
    password: 'userTwoPass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: UserTwoId, access: 'auth' }, process.env.JWT_SECRET).toString()
    }]
}];

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo',
    _creator: UserOneId
}, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 3333,
    _creator: UserTwoId
}];

const populateTodos = (done) => {
    Todo.deleteMany({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.deleteMany({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done());
}

module.exports = { todos, populateTodos, users, populateUsers };