// src/components/TaskForm.tsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Task } from '../types';

interface TaskFormProps {
  onTaskCreated: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'pending' | 'completed'>('pending');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title.trim()) {
      onTaskCreated({ title, description, status });
      setTitle('');
      setDescription('');
      setStatus('pending'); // Reset status to 'pending' after creating a task
    }
  };

  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
              as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value as 'pending' | 'completed')}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </Form.Control>
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
  );
};

export default TaskForm;
