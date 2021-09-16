import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const  inputRefer = useRef(null)

  useEffect(() =>{
    inputRefer.current.focus()
  })

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput('');
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add list"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref = {inputRefer}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default TodoForm;
