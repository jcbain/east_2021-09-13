# Todo App

## Description
A UI to display a list of todos that we should be able to check off when complete or remove entirely. We should also be able to add new todos.

## User Stories
- As a user, I want to be able to see my todos
- As a user, I want to be able to create a new todo
- As a user, I want to be able to indicate that I completed a todo
- As a user, I want to be able to delete a todo

## Structure of data
- todos: an array of objects
  > id: assigned in a backend
  > task: (the todo)
  > done: (whether or not the task is complete (defaults to false))

```js
[
  {"id": 1, task: 'feed cat', done: false},
  {"id": 2, task: 'feed dog', done: false},
  {id: 3, task: 'wash dishes', done: true}
]
```

## Components
- App
  - Form ({ addTodo })
  - div
    - Todo ({ task, done, updateTodo, deleteTodo })

