import './todo-list.css'

// props là 1 object chứa tất cả các thuộc tính được truyền từ component cha xuống
const TodoData = (props) => {
    const { fullname, todoLists, onDelete, reactLogo } = props;
    console.log(todoLists);
  return (
    <div className="todo-data">
        {/* <div className="fullname-display">My name is {fullname}</div> */}
        {/* // Hiển thị fullname truyền từ cha xuống */}
        {/* // sử dụng map để lặp qua mảng todoLists và hiển thị từng todo */}
        {todoLists.length > 0 ? (
            todoLists.map(item => {
                return (
                    <div key={item.id} className="todo-item">
                        <span className="todo-name">{item.name}</span>
                        <button className="btn-delete" onClick={() => onDelete(item.id)}>Delete</button>
                    </div>
                )
            })
        ) : (
            <div className="todo-empty">
                <span>Không có công việc nào. Hãy thêm công việc mới!</span>
                <div className='todo-image'>
                    <img src={reactLogo} alt="react Logo..." className='logo' />
                </div>
            </div>
        )}
        {/* <div className="todo-json">{JSON.stringify(todoLists)}</div> */}
    </div>
  )
}
  
export default TodoData;