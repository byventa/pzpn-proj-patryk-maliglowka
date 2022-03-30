import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayJoin',
})
export class ArrayJoinPipe implements PipeTransform {
  transform(value: string[], ...args: unknown[]): unknown {
    return value.join(' ');
  }
}
