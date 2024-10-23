const express = require('express')
const { Todo }  = require('./db')
const {createTodo, updateTodo} = require('./types')
const cors = require('cors')
const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());

app.post('/todo', async(req, res)=>{
    const inputs = req.body;
    const parseInputs = createTodo.safeParse(inputs);

    if(!parseInputs.success){
        res.status(411).json({
            msg : "Invalid inputs"
        })
    }
    await Todo.create({
        title : inputs.title,
        content : inputs.content,
        completed : false
    })
    res.json({
        msg : "Todo created"
    })
});

app.get('/todos', async(req, res)=>{
    const todos = await Todo.find({})
    console.log(todos);
    res.json({
        todos
    })
});

app.put('/completed', async(req, res)=>{
    const inputs = req.body;
    const parseInputs = updateTodo.safeParse(inputs);

    if(!parseInputs.success){
        res.status(411).json({
            msg : "Invalid inputs"
        })
    }
    await Todo.update({
        _id : parseInputs.data.id
    },{
        completed : true
    })
    res.json({
        msg: "Todo Updated"
    })
});

app.listen(PORT)