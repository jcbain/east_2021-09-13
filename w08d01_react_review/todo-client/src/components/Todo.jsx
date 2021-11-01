const Todo = (props) => {
  const { task, done, updateTodo, deleteTodo } = props;

  const handleUpdate = () => {
    console.log('you tried to update this task')
    updateTodo();
  }

  const handleDelete = () => {
    console.log('you tried to delete this task')
    deleteTodo();
  }
  
  const classStatus = done ? "completed" : ""
  return (
    <div className="todo">
      <h2 className={classStatus}>{task}</h2>
      <button onClick={handleUpdate}>{done ? 'not done?': 'finished?'}</button>
      <button className='delete' onClick={handleDelete}>delete</button>
    </div>
  );
};

export default Todo;