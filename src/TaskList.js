import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, removeTask }) {
  return (
    <ul className="w-full max-w-md">
      {tasks.map((task, index) => (
        <TaskItem key={index} index={index} task={task} removeTask={removeTask} />
      ))}
    </ul>
  );
}

export default TaskList;