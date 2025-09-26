import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-class',
  templateUrl: './title-class.component.html',
  styleUrl: './title-class.component.scss',
})
export class TitleClassComponent {
  @Input({ required: true, alias: "title" }) titleClass: string = '';
}
