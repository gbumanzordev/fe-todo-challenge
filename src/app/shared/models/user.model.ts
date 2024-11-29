import { UserType } from './types';

export interface User {
  avatar: string;
  createdAt: Date;
  email: string;
  fullName: string;
  id: string;
  type: UserType;
  updatedAt: Date;
}
