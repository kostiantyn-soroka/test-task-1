// src/services/api.ts
import axios, { AxiosResponse } from 'axios';
import { Task } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:5001/api',
});

// Fetch all tasks
export const fetchTasks = async (): Promise<Task[]> => {
  const response: AxiosResponse<Task[]> = await api.get('/tasks');
  return response.data;
};

// Create a new task
export const createTask = async (task: Task): Promise<Task> => {
  const response: AxiosResponse<Task> = await api.post('/tasks', task);
  return response.data;
};

// Update an existing task
export const updateTask = async (task: {
  description: string;
  _id?: string;
  title: string;
  status: string
}): Promise<Task> => {
  const response: AxiosResponse<Task> = await api.put(`/tasks/${task._id}`, task);
  return response.data;
};

// Delete a task
export const deleteTask = async (taskId?: string): Promise<void> => {
  await api.delete(`/tasks/${taskId}`);
};
