const z = require('zod')

const createTodo = z.object({
    title : z.string(),
    content : z.string()
})

const updateTodo = z.object({
    id : z.string()
})

module.exports = {
    createTodo:  createTodo,
    updateTodo : updateTodo
}