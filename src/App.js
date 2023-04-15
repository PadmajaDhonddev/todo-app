import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import ChooseList from "./components/ChooseList";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [toggleStatus, setToggleStatus] = useState("Active");

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <Header />
      <ChooseList toDoList={toDoList} setToggleStatus={setToggleStatus} />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        toggleStatus={toggleStatus}
      />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
