import React from 'react';

function TaskItem({ index, task, removeTask }) {
  return (
    <li className="flex items-center justify-between bg-gray-100 p-2 rounded-md mb-2">
      <span>{task}</span>
      <button onClick={() => removeTask(index)} className="ml-2 text-red-600">Usuń</button>
    </li>
  );
}

export default TaskItem;