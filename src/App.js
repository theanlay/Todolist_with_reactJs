import React from 'react';
import './style.css';
import TodoList from './components/TodoList.js';

export default function App() {
  return (
    <div className="todo-app">
      <h1>Todolist</h1>
      <TodoList/>
    </div>
  );
}
