const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:somya123sakshi@cluster0.4ssf9r4.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true,
    },
    completed : Boolean
})

const todo = mongoose.model('todo', todoSchema)

module.exports = {
    todo : todo
}