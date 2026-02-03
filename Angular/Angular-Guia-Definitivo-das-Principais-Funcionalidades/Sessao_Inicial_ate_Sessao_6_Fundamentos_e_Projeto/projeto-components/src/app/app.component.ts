import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'projeto-components';

  cardPlanType1: string = 'Simples';
  cardPlanType2: string = 'Completo';

  cardPlanValue: number = 100;
  cardColorRed: string = 'card-red';
  cardMessageInfo: string = 'Minha informação exemplo'

  handleCardType1(value: string) {
    this.cardPlanType1 = value;
  }

  handleCardInfo(value: string) {
    this.cardMessageInfo = value;
  }
}
