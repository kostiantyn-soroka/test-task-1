import React from 'react';
import {updateTask, deleteTask} from '../services/api';
import { Button } from 'react-bootstrap';
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
        <h5>{task.title}</h5>
        <p>{task.description}</p>
        <p>Status: {task.status}</p>
        <Button variant="success" onClick={handleStatusChange}>
          {task.status === 'pending' ? 'Complete' : 'Undo'}
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>
  );
};

export default Task;
