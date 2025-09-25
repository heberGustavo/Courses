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
 
  handleInputCardType1(e: Event){
    const input = (e.target) as HTMLInputElement;
    
    const valor = input.value;
    let valorFinal = "";

    if(valor) {
      const primeiraLetra = valor[0].toLocaleUpperCase();
      const textoSemPrimeiraLetra = valor.substring(1);
      
      valorFinal = primeiraLetra + textoSemPrimeiraLetra;
    }
    
    this.cardTypeSimples = valorFinal.length ? valorFinal : "Simples";
  }
}
