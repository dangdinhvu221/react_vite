import { useState } from 'react'
import './App.css'
import './components/lean/todo/todo.css'
import TodoData from './components/TodoData';
import TodoNew from './components/ToDoNew';
import ReactLogo from './assets/react.svg';
const App = () =>{

  // Dữ liệu để truyền vào component TodoData
  const fullname = "Eric Arsenal";
  const age = 21;
  const data = {
    address: "Hanoi",
    job: "Developer"
  }

  // initial todos
  const initialTodos = [
    { id: 1, name: "Learning React " },
    { id: 2, name: "Watching Youtube" }
  ];

  const [todos, setTodos] = useState(initialTodos);

  // hàm random số nguyên trong khoảng min đến max
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // truyền addNewTodo cho thằng con xử lý
  const addNewTodo = (name) => {
    if (!name) return;
    const nextId = todos.length ? (randomIntFromInterval(1,100000)) : 1; // Sửa lại chỗ này để dùng hàm random
    const newTodo = { id: nextId, name }; // Tạo todo mới với id ngẫu nhiên
    setTodos(prev => [...prev, newTodo]); // Cập nhật lại danh sách todos
  }

  // xóa todo
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <>
      <div className='todo-container'>
        <div className='todo-title'> Todo List </div>
        <TodoNew addNewTodo={addNewTodo} />
        <TodoData fullname={fullname} 
        todoLists={todos} 
        reactLogo = {ReactLogo}
        onDelete={deleteTodo} />
      </div>
    </>
  )
}

export default App
