import { Schema, model } from 'mongoose';

interface ITask {
  title: string;
  description: string;
  status: 'pending' | 'completed';
}

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true, default: 'pending' },
});

const Task = model<ITask>('Task', taskSchema);

export { Task, ITask };
