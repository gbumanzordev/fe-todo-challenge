import { Pipe, PipeTransform } from '@angular/core';

import { TaskTag } from '@shared/models/types';
import { ASSIGNED_SEVERITIES } from '@shared/utils/assigned-severities';

@Pipe({
  name: 'assignedSeverity',
  standalone: true,
})
export class AssignedSeverityPipe implements PipeTransform {
  transform(tag: TaskTag): string {
    return ASSIGNED_SEVERITIES[tag];
  }
}
