import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-components';

  cardPlanTypeSimple: string = 'Simples';
  cardPlanTypeCompleto: string = 'Completo';
  
  cardPlanValue: number = 100;
  cardColorRed: string = 'card-red';
}
