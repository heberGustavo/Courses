import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = "Heber";
  age: number = 27;
  job: string = "Dev Full Stack";
  hobbies = ['Correr', 'Jogar', 'Estudar'];
  car = {
    name: "Civic",
    year: 2022
  }
}
