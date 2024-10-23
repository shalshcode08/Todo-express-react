import React from 'react'

function Todos({todos}) {
  return <div>
    {todos.map((todo)=> {
        return (
            <div>
                <h1>{todo.title}</h1>
                <h2>{todo.content}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        )
    })}
  </div>
}

export default Todos