import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Animal } from '../../interfaces/Animal';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animalsDetails: string = '';

  animais: Animal[] = [
    { name: "Tuco", type: "Dog", age: 12 },
    { name: "Papa", type: "Bird", age: 3 },
    { name: "Alfredo", type: "Dog", age: 6 },
    { name: "Moly", type: "Horse", age: 10 },
  ];

  showAge(animal: Animal): void {
    this.animalsDetails = `O animal ${animal.name} tem ${animal.age} anos de idade!`;
  }
}
