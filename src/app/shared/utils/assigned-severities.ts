import { TaskTag } from '../models/types';
import { Severities } from '../types/severities.type';

export const ASSIGNED_SEVERITIES: Record<TaskTag, Severities> = {
  ANDROID: 'success',
  RAILS: 'error',
  REACT: 'info',
  IOS: 'warn',
  NODE_JS: 'success',
};
