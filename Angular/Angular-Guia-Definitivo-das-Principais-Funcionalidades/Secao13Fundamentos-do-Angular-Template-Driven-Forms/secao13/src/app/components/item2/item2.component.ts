import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrl: './item2.component.scss'
})
export class Item2Component implements AfterViewInit{
  
  @ViewChild('meuInput1') meuInput1!: NgModel;

  ngAfterViewInit(): void {
    //console.log(this.meuInput1);
  }

  send(){
    if(this.meuInput1.valid && this.meuInput1.touched){
      console.log('Formulário válido e tocado');
    }
  }
}
