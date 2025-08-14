import { useEffect, useState } from 'react'
import { TodoProvider } from './TodoContext/UseContextTodo'
import './App.css'
import { Todoadd } from './components'
import { Todolists } from './components'
import Boxs from '../../17tictactoUsecontext/src/Components/Boxs'
function App() {
  const [todos, settodo] = useState([])

  const addTodo = ((todo) => {
    settodo((pre) => [{ id: Date.now(), ...todo }, ...pre])
  })
  const deleteTodo = ((id) => {
    settodo((pre) => pre.filter((preTodo) => preTodo.id !== id))
  })
  const toggleComplete = ((id) => {
    settodo((pre) => pre.map((pretodo) => pretodo.id == id ? { ...pretodo, completed: !pretodo.completed } : pretodo))
  })
  const updateTodo = ((id, todo) => {
    settodo((pre) => pre.map((pretodo) => pretodo.id === id ? todo : pretodo))
  })
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      settodo(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
console.log(  const [todos, settodo] = useState([])
);


  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <Todoadd />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <Todolists todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
