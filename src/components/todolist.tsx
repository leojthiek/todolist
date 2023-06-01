import React from "react"

interface Todo {
  id: number
  name: string
  deadline: string
}

interface TodolistProps {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export default function Todolist(props: TodolistProps) {
  const { todos, setTodos } = props
  function handleDelete(id: number) {
    const updateTodos = todos.filter((item) => item.id !== id)
    setTodos(updateTodos)
  }
  return (
    <div className='todolist-main'>
      {todos.map((todo) => (
        <div key={todo.id}>
          <ul >
            <li>
                <div className="todolist">
                <p>{todo.name}</p>
              <p> Deadline: {todo.deadline}</p>
              <div className='btn-div'>
                <button
                  className='button-x'
                  onClick={() => handleDelete(todo.id)}
                >
                  clear
                </button>
              </div>
                </div>
             
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}
