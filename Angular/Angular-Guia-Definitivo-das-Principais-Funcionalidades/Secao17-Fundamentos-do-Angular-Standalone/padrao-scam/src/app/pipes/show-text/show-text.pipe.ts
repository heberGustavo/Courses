import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showText',
  standalone: false
})
export class ShowTextPipe implements PipeTransform {

  transform(value: string): string {
    return value;
  }

}
