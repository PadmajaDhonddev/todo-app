import React from "react";

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div
      id={todo.id}
      key={todo.id + todo.task}
      name="todo"
      value={todo.id}
      onClick={(e) => handleClick(e)}
      className={todo.complete ? "todo strike" : "todo"}
    >
      <input value={todo.task} checked={todo.complete} type="checkbox" />
      {todo.task}
    </div>
  );
};

export default ToDo;
