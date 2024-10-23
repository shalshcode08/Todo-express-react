const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db')

const app = express();
const port = 3000;

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.parse(createPayload)

    if (!parsePayload.success) {
        res.status(411).json({
            message: "You sent the wrong inputs"
        })
    }
    //put the date in the mongoDB
    await todo.create({
        title: createPayload.title,
        content: createPayload.content,
        completed: false
    })
    res.json({
        message: "Todo created"
    })

})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    console.log(todos)
    res.json({
        todos
    })
})

app.put('/completed', async (req, res) => {
    const updatePlayload = req.body;
    const parsePayload = updateTodo.parse(updatePlayload);

    if (!parsePayload.success) {
        res.status(411).json({
            message: "You sent the wrong inputs"
        })
    }
    await todo.update({
        _id: req.body.id,
    },
        {
            completed : true
        })
        res.json({
            message : "Todo updated"
        })
})


app.listen(port, () => {
    console.log(`Expres app is runnnig on Port ${port}`)
})