import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-desafio-touched',
  templateUrl: './desafio-touched.component.html',
  styleUrl: './desafio-touched.component.scss'
})
export class DesafioTouchedComponent implements OnInit {
  pessoaForm!: FormGroup;

  constructor(
    private readonly _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.pessoaForm = new FormGroup({
      nome: this._fb.control('', [Validators.required]),
      email: this._fb.control('', [Validators.required])
    });
  }

  get nome(): FormControl{
    return this.pessoaForm.get('nome') as FormControl;
  }

  get email(): FormControl{
    return this.pessoaForm.get('email') as FormControl;
  }

  onClickEnviar() {
    this.pessoaForm.markAllAsTouched();

    if(this.pessoaForm.valid)
      alert('DEMO - Formulário enviado com sucesso!');
  }

}
