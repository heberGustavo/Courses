import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {

  @Output() buttonClickEmmiter = new EventEmitter<string>;
  @Input({ required: true}) cardColor!: string;

  showEvent(){
    const message = `foi clicado: ${this.cardColor}`;
    this.buttonClickEmmiter.emit(message);
  }
}
