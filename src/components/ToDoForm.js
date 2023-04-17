import { useState } from "react";
import "./ToDoForm.css";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === undefined || userInput === "") {
      return;
    }
    addTask(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <br></br>
      <br></br>
      <input
        class="textInput"
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ToDoForm;
