import React, { useState } from 'react';
import data from "./testData.json";

import Header from "./Components/Header";
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';

import './App.css';

function App() {

    const [ toDoList, setToDoList ] = useState(data);

    return (
        <div className="App">
            <Header />
            <ToDoForm />
            <ToDoList 
                toDoList={toDoList}
            />
        </div>
    );
}

export default App;
