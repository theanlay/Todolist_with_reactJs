import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: 'null',
    value: '',
  });
  return todos.map((todo, index) => (
    <div
      className={todo.isComplet ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onclick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => EditTodo({ id: todo.id, value: todo.text })}
          className="Edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
