import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

const [ userInput, setUserInput ] = useState('');

const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
}
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!userInput) return;
      addTask(userInput);
      setUserInput('');
    };

    return (
        <form onSubmit={handleSubmit} >
            <input type="text" value={userInput} onChange={handleChange} style={{padding: "10px"}}/>
            <button style={{padding: "10px"}}>ADD</button>
        </form>
    );
};

export default ToDoForm;
