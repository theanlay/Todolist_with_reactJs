import React from 'react';
import './style.css';
import TodoList from './components/TodoList.js';

export default function App() {
  return (
    <div className="todo-app">
      <h1>Todo List App</h1>
      <TodoList/>
    </div>
  );
}
