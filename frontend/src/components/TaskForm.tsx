import React, { useState, ChangeEvent, FormEvent } from 'react';
import { createTask } from '../services/api';

interface TaskFormProps {
  onTaskCreated: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskCreated }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<'pending' | 'completed'>('pending');
  const [error, setError] = useState<string | null>(null);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value as 'pending' | 'completed');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === '') {
      setError('Title is required');
      return;
    }

    try {
      await createTask({ title, description, status });
      setTitle('');
      setDescription('');
      setStatus('pending');
      setError(null);
      onTaskCreated();
    } catch (err) {
      setError('Failed to create task');
      console.log(err);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select id="status" value={status} onChange={handleStatusChange}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Add Task</button>
      </form>
  );
};

export default TaskForm;
