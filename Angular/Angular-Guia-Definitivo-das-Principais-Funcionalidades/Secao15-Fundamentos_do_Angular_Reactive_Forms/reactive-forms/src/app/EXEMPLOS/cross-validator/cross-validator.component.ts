import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { passwordValidator } from './password-validator';

@Component({
  selector: 'app-cross-validator',
  templateUrl: './cross-validator.component.html',
  styleUrl: './cross-validator.component.scss'
})
export class CrossValidatorComponent {
  pessoaForm = new FormGroup({
    senha: new FormControl(''),
    confirmarSenha: new FormControl('')
  }, {
    validators: passwordValidator
  });

  get confirmarSenha(): FormControl {
    return this.pessoaForm.get('confirmarSenha') as FormControl;
  }

  onClickEnviar() {
    console.log(this.pessoaForm);
  }
}
