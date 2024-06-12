import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import {Task} from './types';
import {fetchTasks, createTask, updateTask, deleteTask} from './services/api';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    };
    loadTasks();
  }, []);

  const handleTaskCreated = async (task: Task) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  const handleTaskUpdated = async (task: Task) => {
    const updatedTask = await updateTask(task);
    setTasks(tasks.map(t => (t._id === updatedTask._id ? updatedTask : t)));
  };

  const handleTaskDeleted = async (taskId?: string) => {
    await deleteTask(taskId);
    setTasks(tasks.filter(t => t._id !== taskId));
  };

  return (
      <Container>
        <hr/>
        <Row>
          <Col md={6}>
            <TaskForm onTaskCreated={handleTaskCreated}/>
          </Col>
          <Col md={6}>
            <TaskList tasks={tasks} onTaskUpdated={handleTaskUpdated} onTaskDeleted={handleTaskDeleted}/>
          </Col>
        </Row>
      </Container>
  );
};

export default App;
