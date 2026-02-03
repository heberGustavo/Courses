import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {

  @Input({required: true}) cardType!: string;
  @Input({required: true}) cardValue!: number;
  @Output() taxasAdicionais = new EventEmitter<number>();

  onButtonClick(){
    alert(`O plano adquirido foi o '${this.cardType}', é necessario pagar o valor ${this.getValue()}`)
    alert("Está sendo calculado as taxas adicionais.... (output)");

    const exemploCalc = this.cardValue * 0.10;
    this.taxasAdicionais.emit(exemploCalc);
  }

  getValue(){
    return `R$ ${this.cardValue},00`
  }
}
