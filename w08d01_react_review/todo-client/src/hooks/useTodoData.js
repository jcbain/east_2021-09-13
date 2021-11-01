import { useEffect, useState } from 'react';
import axios from 'axios';

const useTodoData = () => {
  const [todos, setTodos] = useState({
    data: [],
    loading: true,
    error: false
  })

  // const singleTodo = todos[2];

  useEffect(() => {
    axios.get('/api/todos')
      .then(res => {
        const appData = {
          data: res.data,
          loading: false,
          error: false
        }
        setTodos(appData)
      })
  }, [])

  const updateTodo = (id) => {
    return axios.patch(`/api/todos/${id}`)
      .then(res => {
        console.log(res);
        const index = todos.data.findIndex(todo => todo.id === id);
        const selectedTodo = todos.data.find(todo => todo.id === id);
        const updatedTodo = {...selectedTodo, done: !selectedTodo.done};
        const updatedTodos = [...todos.data.slice(0, index), updatedTodo, ...todos.data.slice(index + 1)]
        setTodos(prev => ({
          ...prev,
          data: updatedTodos
        }))
      })
  }


  const deleteTodo = (id) => {
    return axios.delete(`/api/todos/${id}`)
      .then(res => {
        console.log(res);
        const index = todos.data.findIndex(todo => todo.id === id);
        const updatedTodos = [...todos.data.slice(0, index), ...todos.data.slice(index + 1)]
        setTodos(prev => ({
          ...prev,
          data: updatedTodos
        }))
      })
  }

  const addTodo = (todoValue) => {
    return axios.post('/api/todos', {task: todoValue})
      .then(res => {
        console.log(res)
        setTodos(prev => (
          {
            ...prev,
            data: [...prev.data, res.data]
          }
        ))
      })
  }

  return {todos, updateTodo, deleteTodo, addTodo}
}

export default useTodoData;