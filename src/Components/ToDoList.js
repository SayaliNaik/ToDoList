import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoList, deleteTask }) => {
    return (
        <div>
            {toDoList.map((todo, id) => (
                <ToDoItem
                    key={id}
                    id={id}
                    todo={todo}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
};

export default ToDoList;