import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

import { getDiffDays } from '@shared/utils/diff-days';

@Pipe({
  name: 'dueDate',
  standalone: true,
})
export class DueDatePipe implements PipeTransform {
  transform(value: string): unknown {
    const today = formatDate(new Date(), 'mediumDate', 'en-US');
    const formattedDate = formatDate(value, 'mediumDate', 'en-US');

    if (today === formattedDate) {
      return 'TODAY';
    }

    if (getDiffDays(new Date(value), new Date()) === 1) {
      return 'YESTERDAY';
    }

    return formatDate(value, 'mediumDate', 'en-US');
  }
}
