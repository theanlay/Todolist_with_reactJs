import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const completeTodo = id =>{
    let updatedTodos = todos.map(todo =>{
      if(todo.id === id){
        todo.isComplet = !todo.isComplet
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  return (
    <div>
      <h1>what's the plan for this day</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo}/>
    </div>
  );
}

export default TodoList;
