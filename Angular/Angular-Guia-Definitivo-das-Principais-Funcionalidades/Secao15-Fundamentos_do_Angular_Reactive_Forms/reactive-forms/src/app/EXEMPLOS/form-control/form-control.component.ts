import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss',
})
export class FormControlComponent implements OnInit {
  nome = new FormControl('Inicial', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3), Validators.maxLength(5)],
    updateOn: 'change',
  });

  ngOnInit(){
    console.log(this.nome);  
  }
  
  onClickMostrarNomeControl(){
    console.log(this.nome);
  }

  onClickAlterarValor() {
    this.nome.setValue('Fulano');
  }

  nomeAlterado(){
    console.log(this.nome.value);
  }

  desabilitar(){
    this.nome.disable();
  }

  habilitar(){
    this.nome.enable();
  }

}
