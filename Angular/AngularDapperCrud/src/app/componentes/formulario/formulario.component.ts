import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() onSubmit = new EventEmitter<UsuarioListar>();

  usuarioForm!: FormGroup;

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      id: new FormControl(0),
      nomeCompleto: new FormControl(""),
      email: new FormControl(""),
      cargo: new FormControl(""),
      salario: new FormControl(0),
      cpf: new FormControl(""),
      situacao: new FormControl(true),
      senha: new FormControl(""),
    });
  }

  submit(){
    //envia os dados para o component que esta chamando
    this.onSubmit.emit(this.usuarioForm.value);
  }

}
