import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import {Task} from './types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTaskCreated = () => {
    fetchTasks();
  };

  return (
      <div>
        <h1>To-Do List</h1>
        <TaskForm onTaskCreated={handleTaskCreated}/>
        <TaskList tasks={tasks}/>
      </div>
  );
};

export default App;
