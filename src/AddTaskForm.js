import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex justify-center">
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="Dodaj nowe zadanie..."
        className="border border-gray-300 rounded-md p-2 mr-2"
      />
      <button type="submit" className="bg-pink-300 text-white px-4 py-2 rounded-md">Dodaj</button>
    </form>
  );
}

export default AddTaskForm;