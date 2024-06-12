import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:5001/api',
};

const api = axios.create(config);

export const getTasks = async () => {
  return api.get('/tasks');
};

export const createTask = async (task: any) => {
  return api.post('/tasks', task);
};

export const updateTask = async (id: string, task: any) => {
  return api.put(`/tasks/${id}`, task);
};

export const deleteTask = async (id: string) => {
  return api.delete(`/tasks/${id}`);
};
