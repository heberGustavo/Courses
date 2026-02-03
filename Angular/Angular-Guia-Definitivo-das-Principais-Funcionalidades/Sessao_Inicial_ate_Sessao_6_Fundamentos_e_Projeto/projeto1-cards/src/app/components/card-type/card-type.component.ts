import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-type',
  templateUrl: './card-type.component.html',
  styleUrl: './card-type.component.scss'
})
export class CardTypeComponent {
  @Input({required: true}) typeCard!: string;
}
