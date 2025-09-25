import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required: true}) cardColor!: string;
  @Input({required: true}) cardType!: string;
  @Input({required: true}) cardValue!: number;
}
