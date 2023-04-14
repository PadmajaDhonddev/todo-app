import React from "react";
import "./ChooseList.css";

const TASKS_CATEGORIES = ["All", "Active", "Completed"];
const ChooseList = () => {
  const ontaskClick = () => {
    console.log("Clicked!");
  };

  return (
    <div className="Tasks">
      {TASKS_CATEGORIES.map((tasktype) => (
        <div onClick={ontaskClick} tabIndex={0}>
          {tasktype}
        </div>
      ))}
    </div>
  );
};

export default ChooseList;
