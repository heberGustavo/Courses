import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss'
})
export class NgForComponent {
  personSelectedIndex: number | undefined;

  listPerson = [
    { name: "Heber", age: 27 },
    { name: "Gustavo", age: 20 },
    { name: "Priscila", age: 21 },
    { name: "Marques", age: 37 },
  ];

  selectPerson(index: number){
    this.personSelectedIndex = index;
  }
}
