import { Pipe, PipeTransform } from '@angular/core';
import { TaskTag } from '../models/types';
import { ASSIGNED_SEVERITIES } from '../utils/assigned-severities';

@Pipe({
  name: 'assignedSeverity',
  standalone: true,
})
export class AssignedSeverityPipe implements PipeTransform {
  transform(tag: TaskTag): string {
    return ASSIGNED_SEVERITIES[tag];
  }
}
