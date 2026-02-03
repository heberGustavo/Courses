import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.scss'
})
export class NgClassComponent {
  isGreen: boolean = true;

  setGreen(){
    this.isGreen = true;
  }

  setOrange(){
    this.isGreen = false;
  }
}
