import { PointEstimate, Status, TaskTag } from './types';
import { User } from './user.model';

export interface Task {
  assignee: User;
  createdAt: Date;
  creator: User;
  dueDate: string;
  id: string;
  name: string;
  pointEstimate: PointEstimate;
  position: number;
  status: Status;
  tags: TaskTag[];
}
