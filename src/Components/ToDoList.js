import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoList }) => {
    return (
        <div>
            {toDoList.map((todo, id) => (
                <ToDoItem
                    key={id}
                    id={id}
                    todo={todo}
                />
            ))}
        </div>
    );
};

export default ToDoList;