const TodoNew = (props) => {
    const {addNewTodo} = props;
    // addNewTodo("Learn ReactJS");
  return (
    <div>TodoNew
        {console.log(props)}
    </div>
  )
}

export default TodoNew;