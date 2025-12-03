// props là 1 object chứa tất cả các thuộc tính được truyền từ component cha xuống
const TodoData = ({fullname,age,data}) => {
// props có thể được truyền trực tiếp hoặc destructuring
// có những cách lấy props như sau:
// Cách 1: Lấy trực tiếp từ đối tượng props
// const TodoData = (prop) => {
// Cách 2: Destructuring trong tham số hàm
// const TodoData = ({fullname, age, data}) => {
// Cách 3: Destructuring trong thân hàm
// const {fullname, age, data} = prop;
  return (
    <div className="todo-data">
        {/* <div>
            name: {prop.fullname} <br/>
            age: {prop.age} <br/>
            address: {prop.data.address} <br/>
            job: {prop.data.job} <br/>
        </div> */}
        {/* <div>
            name: {fullname} <br/>
            age: {age} <br/>
            address: {data.address} <br/>
            job: {JSON.stringify(data)} <br/>
        </div> */}
        <div>
            name: {fullname} <br/>
            age: {age} <br/>
            address: {data.address} <br/>
            job: {JSON.stringify(data)} <br/>
        </div>
        <div>To do Data</div>
    </div>
  )
}   
export default TodoData;