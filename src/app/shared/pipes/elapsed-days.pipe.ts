import { Pipe, PipeTransform } from '@angular/core';
import { getDiffDays } from '../utils/diff-days';

@Pipe({
  name: 'elapsedDays',
  standalone: true,
})
export class ElapsedDaysPipe implements PipeTransform {
  transform(value: string): number {
    return getDiffDays(new Date(value), new Date());
  }
}
