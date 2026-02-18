import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrl: './item3.component.scss'
})
export class Item3Component {
  meuTextArea: string = '';

  showData(){
    console.log(this.meuTextArea);
  }
}
