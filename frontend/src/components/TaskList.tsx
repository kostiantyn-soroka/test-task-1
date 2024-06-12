// TaskList.tsx
import React from 'react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map((task) => (
              <li key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Status: {task.status}</p>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default TaskList;
