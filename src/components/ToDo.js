import React from "react";
import "./ToDo.css";
const ToDo = ({ todo, handleToggle }) => {
  const onCheckBoxClick = (todo, e) => {
    todo.complete = !todo.complete;
    handleToggle(e.currentTarget.id);
  };
  return (
    <div>
      <input
        value={todo.task}
        checked={todo.complete}
        type="checkbox"
        onChange={(e) => onCheckBoxClick(todo, e)}
      />
      <span className={`${todo.complete ? "complete" : ""}`}>{todo.task}</span>
    </div>
  );
};

export default ToDo;
