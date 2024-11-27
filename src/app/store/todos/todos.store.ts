import { signalStore, withState } from '@ngrx/signals';
import { Task } from '../../models/task.model';

type TasksState = {
  tasks: Task[];
  isLoading: boolean;
};

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
};

export const TasksStore = signalStore(withState(initialState));
