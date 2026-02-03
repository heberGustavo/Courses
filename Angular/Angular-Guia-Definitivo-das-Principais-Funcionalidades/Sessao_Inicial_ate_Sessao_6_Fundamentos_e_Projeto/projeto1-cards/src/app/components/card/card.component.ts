import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required: true}) cardId!: number;
  @Input({required: true}) cardColor!: string;
  @Input({required: true}) cardType!: string;
  @Input({required: true}) cardValue!: number;

  buttonCardAdquirirOnClicked(taxasAdicionais: number){
    alert(`Resultado final: Será pago o valor ${this.gettValue(this.cardValue)} + ${this.gettValue(taxasAdicionais)}. Total: ${this.valorTotalPagamento(this.cardValue, taxasAdicionais)}`);
  }

  gettValue(valor: number){
    return `R$ ${valor},00`
  }

  valorTotalPagamento(valorPlano: number, taxasAdicionais: number){
    const total = valorPlano + taxasAdicionais;
    return this.gettValue(total);
  }
}
