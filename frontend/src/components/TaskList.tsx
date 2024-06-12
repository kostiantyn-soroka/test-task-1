// src/components/TaskList.tsx
import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onTaskUpdated: (task: Task) => void;
  onTaskDeleted: (taskId?: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskUpdated, onTaskDeleted }) => {
  const handleUpdate = (task: Task) => {
    onTaskUpdated({ ...task, status: task.status === 'pending' ? 'completed' : 'pending' });
  };

  return (
      <ListGroup>
        {tasks.map(task => (
            <ListGroup.Item key={task._id}>
              <h5>{task.title}</h5>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
              <Button variant="success" onClick={() => handleUpdate(task)}>
                {task.status === 'pending' ? 'Complete' : 'Undo'}
              </Button>
              <Button variant="danger" onClick={() => onTaskDeleted(task._id)}>
                Delete
              </Button>
            </ListGroup.Item>
        ))}
      </ListGroup>
  );
};

export default TaskList;
