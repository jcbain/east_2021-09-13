import {useState} from 'react';

const NewTodoForm = (props) => {
  const { addTodo } = props;
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value)
      .then(res => {
        setValue("")

      })
    // console.log('you submitted the form')
  }

  const handleChange = (event) => {
    // console.log(event)
    setValue(event.target.value);
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label>Got something new to do?</label>
      <input name="todo" 
        value={value}
        onChange={handleChange}
        placeholder="write it here"
      />
      <button type="submit">Add todo</button>

    </form>
  )
}

export default NewTodoForm;