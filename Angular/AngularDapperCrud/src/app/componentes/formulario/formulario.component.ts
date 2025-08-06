import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioListar } from '../../models/Usuario';

@Component({
  selector: 'app-formulario',
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  @Input() btnAcao!: string;
  @Input() descricaoTitulo!: string;
  @Input() desativarCampo: boolean = false;
  @Input() dadosUsuario: UsuarioListar | null = null;

  @Output() onSubmit = new EventEmitter<UsuarioListar>();

  usuarioForm!: FormGroup;

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      id: new FormControl({ value: this.dadosUsuario ? this.dadosUsuario.id : 0, disabled: this.desativarCampo }),
      nomeCompleto: new FormControl({ value: this.dadosUsuario ? this.dadosUsuario.nomeCompleto : "", disabled: this.desativarCampo }),
      email: new FormControl({ value: this.dadosUsuario ? this.dadosUsuario.email : "", disabled: this.desativarCampo }),
      cargo: new FormControl({ value: this.dadosUsuario ? this.dadosUsuario.cargo : "", disabled: this.desativarCampo }),
      salario: new FormControl({ value: this.dadosUsuario ? this.dadosUsuario.salario : 0, disabled: this.desativarCampo}),
      cpf: new FormControl({ value: this.dadosUsuario ? this.dadosUsuario.cpf : "", disabled: this.desativarCampo }),
      situacao: new FormControl({ value: this.dadosUsuario ? this.dadosUsuario.situacao : true, disabled: this.desativarCampo }),
      senha: new FormControl({ value: this.dadosUsuario ? this.dadosUsuario.senha : "", disabled: this.desativarCampo }),
    });
  }

  submit() {
    //envia os dados para o component que esta chamando
    this.onSubmit.emit(this.usuarioForm.value);
  }

}
