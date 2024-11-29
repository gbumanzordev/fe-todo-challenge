import { Task } from './task.model';

export type TaskResponse = Omit<Task, 'creator' | 'assignee'> & {
  assignee: {
    avatar: string;
    fullName: string;
  };
};

export type TasksApiResponse = {
  tasks: TaskResponse[];
};
