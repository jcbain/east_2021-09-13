import './App.scss';
import useTodoData from './hooks/useTodoData';

import Todo from './components/Todo';
import NewTodoForm from './components/NewTodoForm';


// const todos = [
//   {id: 1, task: 'feed cat', done: false},
//   {id: 2, task: 'feed dog', done: false},
//   {id: 3, task: 'wash dishes', done: true}
// ];

function App() {

  const {todos, updateTodo, deleteTodo, addTodo} = useTodoData();
  
  const todoItems = todos.data.map((todo) => {
    return (
      <Todo key={todo.id}
        task={todo.task}
        done={todo.done}
        updateTodo={() => updateTodo(todo.id)}
        deleteTodo={() => deleteTodo(todo.id)}
      />
    )
  })

 

  return (
    <div className="App">
      <h1>Some Fancy Todo Application Title</h1>
      <NewTodoForm addTodo={addTodo}/>
      {todos.loading && <h2>Loading...</h2>}
      <div className="todos">
        {todoItems}
      {/* <Todo task={singleTodo.task} done={singleTodo.done} /> */}
      {/* <Todo /> */}
      </div>
    </div>
  );
}

// Todo({task: "feed cat", done: false, someOtherProp: })

export default App;
