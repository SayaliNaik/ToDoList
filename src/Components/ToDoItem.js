import React from 'react';
import { ToDo } from '../App.css.js';

const ToDoItem = ({ todo, id, deleteTask, completeTask }) => {

    return (
        <ToDo>
            <input
                type="checkbox"
                onClick={() => completeTask(id)}
            />
            <div
                style={{ textDecoration: todo.complete ? "line-through" : "" }}
            >
                {todo.task}
            </div>
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

