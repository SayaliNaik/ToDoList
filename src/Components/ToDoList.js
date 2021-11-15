import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoList, deleteTask, completeTask }) => {
    return (
        <div>
            {toDoList.map((todo, id) => (
                <ToDoItem
                    id={id}
                    todo={todo}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                />
            ))}
        </div>
    );
};

export default ToDoList;