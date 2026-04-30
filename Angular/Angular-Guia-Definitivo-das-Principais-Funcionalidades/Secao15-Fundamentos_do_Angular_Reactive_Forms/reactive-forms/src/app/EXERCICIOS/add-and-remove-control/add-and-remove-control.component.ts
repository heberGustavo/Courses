import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-and-remove-control',
  templateUrl: './add-and-remove-control.component.html',
  styleUrl: './add-and-remove-control.component.scss'
})
export class AddAndRemoveControlComponent implements OnInit {
  pessoaForm!: FormGroup;

  ngOnInit() {
    this.pessoaForm = new FormGroup({
      nome: new FormControl('', Validators.required),
    });
  }

  get mostrarMaisInfo() {
    return this.pessoaForm.get('maisInfo') !== null;
  }

  onClickAdicionarInfo() {
    this.pessoaForm.addControl('maisInfo', new FormControl('', Validators.required));
  }

  onClickRemoverInfo() {
    this.pessoaForm.removeControl('maisInfo');
  }

  onClickMostrarFormulario() {
    console.log(this.pessoaForm);
  }
}
