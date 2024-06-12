import React from 'react';
import {updateTask, deleteTask} from '../services/api';
import {Task} from "../types";

const Task: React.FC<{ task: Task }> = ({task}) => {
  const handleStatusChange = async (): Promise<void> => {
    const updatedTask = {...task, status: task.status === 'pending' ? 'completed' : 'pending'};
    await updateTask(updatedTask);
    window.location.reload();
  };

  const handleDelete = async (): Promise<void> => {
    await deleteTask(task._id);
    window.location.reload();
  };

  return (
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Status: {task.status}</p>
        <button onClick={handleStatusChange}>Toggle Status</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
  );
};

export default Task;
