import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceUnderscore',
  standalone: true,
})
export class ReplaceUnderscorePipe implements PipeTransform {
  transform(value: string, replacement = ' '): string {
    return value ? value.replace(/_/g, replacement) : value;
  }
}
