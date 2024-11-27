import { PointEstimate, Status, TaskTag } from './enums';
import { User } from './user.model';

export interface Task {
  assignee: User;
  createdAt: Date;
  creator: User;
  dueDate: Date;
  id: string;
  name: string;
  pointEstimate: PointEstimate;
  position: number;
  status: Status;
  tags: TaskTag[];
}
