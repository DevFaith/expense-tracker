import React from 'react'

 // src/components/TaskList.jsx
// src/components/TaskList.jsx
const TaskList = ({ tasks, deleteTask }) => {
    return (
      <ul className="p-6 max-w-2xl mx-auto">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center hover:bg-gray-100 transition"
            >
              <span className="text-gray-800">{task}</span>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow transition-all"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center">No tasks yet. Start adding some!</p>
        )}
      </ul>
    );
  };
  
  export default TaskList;
  