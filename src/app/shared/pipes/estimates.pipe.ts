import { Pipe, PipeTransform } from '@angular/core';
import { PointEstimate } from '../models/types';
import { POINT_ESTIMATES } from '../utils/point-estimates';

@Pipe({
  name: 'estimates',
  standalone: true,
})
export class EstimatesPipe implements PipeTransform {
  transform(value: PointEstimate): unknown {
    const estimateValue = POINT_ESTIMATES[value];
    return `${estimateValue} ${estimateValue === 1 ? 'Point' : 'Points'}`;
  }
}
