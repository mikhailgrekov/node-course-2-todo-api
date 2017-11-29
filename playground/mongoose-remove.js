const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5a1ec91e5c770c64fd8bda0e'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5a1ec8b55c770c64fd8bd9dc').then((todo) => {
    console.log(todo);
});
