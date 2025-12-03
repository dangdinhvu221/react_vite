import { useState } from 'react'
import './App.css'
import './components/lean/todo/todo.css'
import TodoData from './components/TodoData';
import TodoNew from './components/ToDoNew';
const App = () =>{

  // Dữ liệu để truyền vào component TodoData
  const fullname = "Dang Dinh Vu";
  const age = 21;
  const data = {
    address: "Hanoi",
    job: "Developer"
  }

  // truyền addNewTodo cho thằng con xử lý
  const addNewTodo = (name) => {
    alert(`Add new todo: ${name}`);
  }
  // addNewTodo();

  return (
    <>
      <div className='todo-container'>
        <div className='todo-title'> Todo List </div>
        {/* // Truyền props vào component TodoData */}
        {/* truyền tham chiếu addNewTodo vào component TodoData */}
        {/*addNewTodo chỉ truyền Data thôi chứ chưa thực thi */}
        <TodoNew addNewTodo = {addNewTodo}/>
          
        <TodoData fullname = {fullname}
                  age = {age}
                  data = {data} 
                  />
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
