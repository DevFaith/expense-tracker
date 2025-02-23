// src/components/TaskForm.jsx
import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow-md rounded-lg max-w-2xl mx-auto mt-6"
    >
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition-all"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
