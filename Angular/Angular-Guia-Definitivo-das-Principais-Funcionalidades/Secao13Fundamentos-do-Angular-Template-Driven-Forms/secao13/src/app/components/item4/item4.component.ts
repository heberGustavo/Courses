import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item4',
  templateUrl: './item4.component.html',
  styleUrl: './item4.component.scss'
})
export class Item4Component {
  nome: string = '';
  descricao: string = '';
  pais: string = '1';
  radioButton: string = '1';
  checkbox: boolean = false;

  onSubmit(form: NgForm) {
    console.log('ngForm', form.value);
  }

}
