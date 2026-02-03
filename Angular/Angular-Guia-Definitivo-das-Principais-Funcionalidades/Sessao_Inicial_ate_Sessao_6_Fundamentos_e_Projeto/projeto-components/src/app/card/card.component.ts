import { Component, Input } from '@angular/core';

function transformToLowerCase(value: string){
  ///.....
  console.log(value);
  return value.toLowerCase();
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardPlanValue: number = 0;
  @Input() cardColor: string = 'card-green';
  
  //WITH TRANSFORM
  @Input({required: true, transform: (value: string) => transformToLowerCase(value)}) testMessageWithTransform: string = '';

  //WITH SET AND GET
  private _cardPlanType: string = '';

  @Input({ required: true }) 
  set cardPlanType(value: string){
    this._cardPlanType = value.toUpperCase();
  }

  get cardPlanType(){
    return this._cardPlanType;
  }

  getValor() {
    return `R$ ${this.cardPlanValue},00`;
  }

  buttonCardClicked(value: string){
    console.log("Button card clicked!");
    console.log(`The message is: ${value}`);
  }
}
