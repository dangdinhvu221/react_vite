import { useState } from 'react'
import './App.css'
import './components/lean/todo/todo.css'
const App = () =>{

  return (
    <>
      <div className='todo-container'>
        <div className='todo-title'> Todo List </div>
        <div>
          <input type="text" />
          <button>Add</button>
          <div>
            <div>Learning React</div>
            <div>Hello React JS.</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
