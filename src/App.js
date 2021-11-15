import React from 'react';
import Header from "./Components/Header";
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <ToDoForm />
            <ToDoList />
        </div>
    );
}

export default App;
