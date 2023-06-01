import React from "react"
import Todolist from "./todolist"


interface Todo {
    id: number;
    name: string;
    deadline: string;
  }

export default function Main() {
  const [name, setName] = React.useState<string>("")
  const [deadline, setDeadline] = React.useState<string>('')
  const [todos,setTodos]= React.useState<Todo[]>([])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    if (name === "name") {
      setName(value)
    } else if (name === "deadline") {
      const date = new Date(value)
      setDeadline(date.toISOString().substring(0,10))
    }
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTodo: Todo = {
      id: todos.length + 1,
      name: name,
      deadline: deadline,
    };
    setTodos([...todos, newTodo]);
    setName("");
    setDeadline("");
  }
  
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div className='main-input'>
      <input
        type='text'
        placeholder='What`s your plan ?'
        className='input1'
        name='name'
        value={name}
        onChange={handleChange}
      />
      <input
        type='date'
        name='deadline'
        placeholder='Enter deadline'
        className='input1'
        onChange={handleChange}
        value={deadline}
      />
      <div className='button-div'>
        <button className='button'>
          Add todo
        </button>
      </div>
    </div>
    </form>
    <div>
        <Todolist todos={todos} setTodos={setTodos}/>
    </div>
    </div>
  )
}
