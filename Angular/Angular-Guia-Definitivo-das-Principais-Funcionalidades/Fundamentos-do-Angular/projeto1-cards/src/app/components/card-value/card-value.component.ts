import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-value',
  templateUrl: './card-value.component.html',
  styleUrl: './card-value.component.scss'
})
export class CardValueComponent {
  @Input({required: true}) cardValue: number = 0;

  getValue(){
    return `R$ ${this.cardValue},00`
  }
}
