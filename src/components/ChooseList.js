import React from "react";
import "./ChooseList.css";

const TASKS_CATEGORIES = ["All", "Active", "Completed"];
const ChooseList = ({ toDoList, setToggleStatus }) => {
  const ontaskClick = (tasktype) => {
    setToggleStatus(tasktype);
  };
  return (
    <div className="Tasks">
      {TASKS_CATEGORIES.map((tasktype) => (
        <div
          onClick={() => {
            ontaskClick(tasktype);
          }}
          tabIndex={0}
        >
          {tasktype}
        </div>
      ))}
    </div>
  );
};

export default ChooseList;
