import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) cardPlanType: string = '';
  @Input() cardPlanValue: number = 0;
  @Input() cardColor: string = 'card-green';

  getValor() {
    return `R$ ${this.cardPlanValue},00`;
  }

  buttonCardClicked(value: string){
    console.log("Button card clicked!");
    console.log(`The message is: ${value}`);
  }
}
