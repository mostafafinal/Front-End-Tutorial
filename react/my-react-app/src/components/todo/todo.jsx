import { useState } from "react";
function ToDo() {
  const [tasks, setTasks] = useState([
    "Doning Anything",
    "Blablabla",
    "Any Piece Of Kick",
  ]);
  const [newTasks, setNewTasks] = useState("");

  // Handlers
  const newTasksChangeHandler = (event) => setNewTasks(event.target.value);
  const addTasksHandler = () => {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    }
  };
  const removeTaskHandler = (index) => {
    setTasks((t) => t.filter((_, i) => i !== index));
  };
  const upBtnHandler = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };
  const downBtnHandler = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };
  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Entre A New Task"
        value={newTasks}
        onChange={newTasksChangeHandler}
      />
      <button onClick={addTasksHandler}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => removeTaskHandler(index)}>Delete</button>
            <button onClick={() => upBtnHandler(index)}>👆</button>
            <button onClick={() => downBtnHandler(index)}>👇</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDo;
