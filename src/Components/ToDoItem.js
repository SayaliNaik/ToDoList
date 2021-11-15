import React from 'react';
import { ToDo} from '../App.css.js';

const ToDoItem = () => {
    return (
        <ToDo>
            <input
                type="checkbox"
            />
            <div></div>
            <button
                style={{marginLeft: "10px"}}
            >
                X
            </button>

            <br />
        </ToDo>
    );
};

export default ToDoItem;

