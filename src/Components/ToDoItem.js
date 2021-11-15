import React from 'react';
import { ToDo} from '../App.css.js';

const ToDoItem = ({ todo, id, deleteTask }) => {
    return (
        <ToDo>
            <input
                type="checkbox"
            />
            <div>{todo.task}</div>
            <button
                onClick={() => deleteTask(id)}
                style={{marginLeft: "10px"}}
            >
                X
            </button>

            <br />
        </ToDo>
    );
};

export default ToDoItem;

