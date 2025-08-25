import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animais = [
    { name: "Tuco", type: "Dog"},
    { name: "Papa", type: "Bird"},
    { name: "Alfredo", type: "Dog"},
    { name: "Moly", type: "Horse"},
  ];
}
