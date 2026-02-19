import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item5',
  templateUrl: './item5.component.html',
  styleUrl: './item5.component.scss'
})
export class Item5Component {
  nome: string = '';
  idade: string = '';
  cargo: string = '';
  setor: string = '';

  onSubmit(form: NgForm){
    console.log("form", form.value);
  }
}
