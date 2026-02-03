import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputBackground]'
})
export class InputBackgroundDirective {
  @Input() appInputBackground: string = 'white';
  @Input() textColor: string = 'black';

  @HostBinding('style.backgroundColor') bgColor = '';
  @HostBinding('style.color') color = '';

  @HostListener('focus') onFocus() {
    this.bgColor = this.appInputBackground;
  }

  @HostListener('blur') onBlur() {
    this.bgColor = 'white';
    this.color = 'black';
  }

  @HostListener('keyup') onKeyUp() {
    this.color = this.textColor;
  }
}
