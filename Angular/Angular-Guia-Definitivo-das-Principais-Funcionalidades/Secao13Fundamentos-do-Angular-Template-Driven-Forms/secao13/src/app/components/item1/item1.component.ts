import { Component } from '@angular/core';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrl: './item1.component.scss'
})
export class Item1Component {
  nome = 'Angular';
  nome2 = 'Two-way-data-binding';

  getChange1(text: string) {
    console.log(text);
  }

  show() {
    console.log(this.nome2);
  }
}
