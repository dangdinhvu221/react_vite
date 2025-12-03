// props là 1 object chứa tất cả các thuộc tính được truyền từ component cha xuống
const TodoData = ({ fullname, todos = [] }) => {
  return (
    <div className="todo-data">
        <div style={{ marginBottom: 8 }}>My name is {fullname}</div>
        {todos.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
        <div style={{ marginTop: 8 }}>{JSON.stringify(todos)}</div>
    </div>
  )
}
  
export default TodoData;