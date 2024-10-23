const mongoose = require('mongoose');

mongoose.connect("") //mongoURL

const todoSchema = mongoose.Schema({
    title : String,
    content : String,
    completed : Boolean
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = {
    Todo
}
