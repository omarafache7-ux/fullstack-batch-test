//import React from 'react';optional step, but good practice to include it
import ToDoItem from './ToDoItem';

const todoData = [
    {id:1,text:"Learn react js"},
    {id:2,text:"Learn node and express js"},
    {id:3,text:"Learn react mongo db and mongoose"},
    , {id:4,text:"Learn git and src control"}];

function ToDoList(){
    return(
        <div className="todo-list">
          {
            todoData.map(todo => (
                <ToDoItem key={todo.id} todoData={todo}/>
            ))
          }
        </div>
    )
}

export default ToDoList;