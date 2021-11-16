import React, { useState } from 'react';
import { ToDo, Item, Button } from '../App.css.js';

const ToDoItem = ({ todo, id, deleteTask, completeTask }) => {

    const [ editInput, setEditInput ] = useState(todo.task);

    const handleEdit = (e) => {
        setEditInput(e.target.value)
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "Escape") {
          e.target.blur();
        }
    };

    const onBlur = (e) => {
        if (e.target.value.trim() === "") {
            setEditInput(todo.task);
        } else {
            setEditInput(e.target.value)
        }
    };

    return (
        <>
        <ToDo>
            <input
                type="checkbox"
                onClick={() => completeTask(id)}
                style={{ zoom: 2.5 }}
                
            />
            <Item
                key={id}
                style={{ textDecoration: todo.complete ? "line-through" : "" }}
                todo={todo.task}
                value={editInput}
                onChange={handleEdit}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
            />
            <Button
                onClick={() => deleteTask(id)}
            >
                ✕
            </Button>

            <br />
        </ToDo>
        </>
    );
};

export default ToDoItem;

