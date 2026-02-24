import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformText',
  standalone: false
})
export class TransformTextPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
