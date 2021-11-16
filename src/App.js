import React, { useState } from 'react';
import data from "./testData.json";

import Header from "./Components/Header";
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';

import './App.css';

function App() {

    const [ toDoList, setToDoList ] = useState(data);

    const addTask = (task) => {
      const newItem = [...toDoList, { task }];
      setToDoList(newItem);
    };

    const deleteTask = id => {
      const newItem = [...toDoList];
      newItem.splice(id,1);
      setToDoList(newItem);
    };

    const completeTask = (id) => {
      const newItem = [...toDoList];
      newItem[id].complete = !newItem[id].complete;
      setToDoList(newItem);
    };
  

    return (
        <div className="App">
            <Header />
            <ToDoForm addTask={addTask}/>
            <ToDoList 
                toDoList={toDoList}
                deleteTask={deleteTask}
                completeTask={completeTask}
            />
        </div>
    );
}

export default App;
