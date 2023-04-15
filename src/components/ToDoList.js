import ToDo from "./ToDo";
import React from "react";

const ToDoList = ({ toDoList, handleToggle, toggleStatus }) => {
  const listToRender = toDoList.filter((todo) => {
    if (toggleStatus === "Active") return todo.complete === false;
    else if (toggleStatus === "Completed") return todo.complete === true;
    else return true;
  });
  return (
    <div>
      {listToRender.map((todo) => (
        <ToDo todo={todo} handleToggle={handleToggle} />
      ))}
    </div>
  );
};

export default ToDoList;
