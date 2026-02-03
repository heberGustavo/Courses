import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.scss',
})
export class NgStyleComponent {
  fontSize: number = 20;
  textColor: 'red' | 'black' = 'black';
  nameColor: 'Vermelho' | 'Preto' = 'Vermelho';
  styleText: string = `font-size: ${this.fontSize}px`;
  styleObj = {
    'font-size': this.fontSize + 'px',
    color: this.textColor,
  };

  increaseFontSize() {
    this.fontSize += 2;

    this.alterStyleString();
    this.alterStyleObj();
  }

  decreaseFontSize() {
    this.fontSize -= 2;

    this.alterStyleString();
    this.alterStyleObj();
  }

  toggleColor() {
    this.toggleColorAndTextButton();
    this.alterStyleString();
    this.alterStyleObj();
  }

  toggleColorAndTextButton() {
    if (this.textColor == 'black') {
      this.textColor = 'red';
      this.nameColor = 'Preto';
    } else {
      this.textColor = 'black';
      this.nameColor = 'Vermelho';
    }
  }

  alterStyleString() {
    this.styleText = `font-size: ${this.fontSize}px; color: ${this.textColor}`;
  }

  alterStyleObj() {
    this.styleObj = {
      'font-size': this.fontSize + 'px',
      color: this.textColor,
    };
  }
}
