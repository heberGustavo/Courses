import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  tipo: string = "Simpes Teste";
  valor: number = 1000;

  getValor(){
    return `R$ ${this.valor},00`;
  }
}
