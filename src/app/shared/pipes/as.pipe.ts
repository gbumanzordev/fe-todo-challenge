import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'as',
  standalone: true,
})
export class AsPipe implements PipeTransform {
  transform<T>(value: unknown, _type: T): T {
    return value as T;
  }
}
