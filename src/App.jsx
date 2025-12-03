import { useState } from 'react'
import './App.css'
import './components/lean/todo/todo.css'
import TodoData from './components/TodoData';
const App = () =>{

  // Dữ liệu để truyền vào component TodoData
  const fullname = "Dang Dinh Vu";
  const age = 21;
  const data = {
    address: "Hanoi",
    job: "Developer"
  }

  return (
    <>
      <div className='todo-container'>
        <div className='todo-title'> Todo List </div>
        {/* // Truyền props vào component TodoData */}
        <TodoData fullname = {fullname}
                  age = {age}
                  data = {data} />
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
