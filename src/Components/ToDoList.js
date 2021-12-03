import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ toDoList, deleteTask, completeTask }) => (
  <div>
    {toDoList.map((todo, id) => (
      <ToDoItem
        key={todo.id}
        id={id}
        todo={todo}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    ))}
  </div>
);

export default ToDoList;
