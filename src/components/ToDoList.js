import ToDo from "./ToDo";
import React from "react";

const ToDoList = ({toDoList, handleToggle, handleFilter})=>{
    return (
        <div>
            {toDoList.map(todo =>
                (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            )}
            <button style={{margin:'20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;