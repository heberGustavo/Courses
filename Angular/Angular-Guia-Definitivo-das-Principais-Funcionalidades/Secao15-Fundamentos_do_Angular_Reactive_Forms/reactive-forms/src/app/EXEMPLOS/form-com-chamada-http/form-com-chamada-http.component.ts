import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-form-com-chamada-http',
  templateUrl: './form-com-chamada-http.component.html',
  styleUrl: './form-com-chamada-http.component.scss'
})
export class FormComChamadaHttpComponent implements OnInit {

  pessoaForm!: FormGroup;

  constructor(
    private readonly _userService: UserService
  ) { }

  ngOnInit() {
    this.criarFormulario();
    this.obterUsuarioPreencherFormulario();

    console.log("Componente - Formulário com chamada HTTP");
    console.log(this.pessoaForm);
  }

  get telefone(): FormArray {
    return this.pessoaForm.get('telefones') as FormArray;
  }

  private criarFormulario() {
    this.pessoaForm = new FormGroup({
      nome: new FormControl(''),
      idade: new FormControl(null),
      ativo: new FormControl(false),
      endereco: new FormGroup({
        rua: new FormControl(''),
        numero: new FormControl(null)
      }),
      telefones: new FormArray([])
    });
  }

  private obterUsuarioPreencherFormulario() {
    this._userService.getUserMock().subscribe((userResponse: any) => {
      this.preencherFormulario(userResponse);
    })
  }

  private preencherFormulario(userResponse: any) {
    this.pessoaForm.patchValue(userResponse);
    this.preencherTelefonesFormulario(userResponse.telefones);
  }

  private preencherTelefonesFormulario(telefones: any) {
    this.telefone.clear();

    telefones.forEach((tel: any) => {
      this.telefone.push(
        new FormGroup({
          numero: new FormControl(tel.numero),
          ddd: new FormControl(tel.ddd)
        })
      );
    });
  }

}
