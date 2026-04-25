import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    endereco: new FormGroup({
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
    })
  });

  constructor() {
    console.group('Comp. FormGroup - constructor');
    console.warn('form-group-control');
    console.log(this.pessoaForm);
    console.groupEnd();
  }

  onSubmit() {
    this.pessoaForm.markAllAsTouched();
    console.group('Comp. FormGroup - onSubmit');
    console.log(this.pessoaForm.value);
    console.groupEnd();

    const nome = this.pessoaForm.get('nome')?.hasError('required');
    console.log('nome: ', nome);
  }

  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl;
  }

  get email(): FormControl {
    return this.pessoaForm.get('email') as FormControl;
  }

  get endereco(): FormControl {
    return this.pessoaForm.get('endereco') as FormControl;
  }

  get enderecoRua(): FormControl {
    return this.endereco?.get('rua') as FormControl;
  }

  get enderecoNumero(): FormControl {
    return this.endereco?.get('numero') as FormControl;
  }
}
