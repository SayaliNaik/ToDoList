import React, { useState } from 'react';
import { Button } from '../App.css.js';

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    if (e.target.value === ' ') return;
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput) return;
    addTask(userInput);
    setUserInput('');
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        style={{ padding: '10px' }}
        data-testid="formInput"
      />
      <Button data-testid="add">ADD</Button>
    </form>
  );
};

export default ToDoForm;
