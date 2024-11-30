import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

import { getDiffDays } from '@shared/utils/diff-days';

@Pipe({
  name: 'elapsedDays',
  standalone: true,
})
export class ElapsedDaysPipe implements PipeTransform {
  transform(value: string): number {
    if (formatDate(value, 'mediumDate', 'en-US') === formatDate(new Date(), 'mediumDate', 'en-US')) {
      return 0;
    }
    return getDiffDays(new Date(value), new Date());
  }
}
