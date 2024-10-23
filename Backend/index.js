const express = require ('express');
const {createTodo, updateTodo} = require('./types');

const app = express();
const port = 3000;

app.post('/todo', (req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.parse(createPayload)

    if(!parsePayload.success){
        res.status(411).json({
            message : "You sent the wrong inputs"
        })
    }
    //put the date in the mongoDB
})

app.get('/todos', (req, res)=>{
    
})

app.put('/completed', (req,res)=>{
    const updatePlayload = req.body;
    const parsePayload = updateTodo.parse(updatePlayload);

    if(!parsePayload.success){
        res.status(411).json({
            message : "You sent the wrong inputs"
        })
    }
})

app.listen(port, ()=>{
    console.log(`Expres app is runnnig on Port ${port}`)
})