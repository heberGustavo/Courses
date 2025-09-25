import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto1-cards';

  cardColorRed = 'card-red';
  cardColorGreen = 'card-green';
  cardColorBrown = 'card-brown';
  cardColorYellow = 'card-yellow';

  cardTypeSimples = "Simples";
  cardTypeCompleto = "Completo";
  cardTypePro = "PRO";
  cardTypeAdvance = "Advance";
  
  showCards(){
    const info = {
      car: {
        color: "card-red",
        type: "Simples",
        value: 100
      }
    }

    console.log(info);
  }
}
