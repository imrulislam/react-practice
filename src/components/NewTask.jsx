import { useState } from "react";
import Button from "./shared/Button";

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState();

  function handleTaskChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleAddTask() {
    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        value={enteredTask}
        onChange={handleTaskChange}
        type="text"
        className="w-64 px-2 py-2 rounded-sm bg-stone-200"
      />
      <Button onClick={handleAddTask}>Add Task</Button>
    </div>
  );
}
