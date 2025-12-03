import { useState } from 'react';

const TodoNew = (props) => {
    const { addNewTodo } = props;
    const [text, setText] = useState('');

    const handleAdd = () => {
      if (!text.trim()) return;
      addNewTodo(text.trim());
      setText('');
    }

  return (
    <div className="todo-new">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAdd}>Add</button>
      <span style={{ marginLeft: 8 }}> My text input is = {text}</span>
    </div>
  )
}

export default TodoNew;