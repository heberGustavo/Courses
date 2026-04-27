import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent implements OnInit {

  pessoaForm!: FormGroup;

  constructor(
    private readonly _fb: FormBuilder
  ) { }

  ngOnInit(){
    this.pessoaForm = this._fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      endereco: this._fb.group({
        rua: ['', [Validators.required]],
        numero: ['', [Validators.required]]
      }),
      musicas: this._fb.array([
        ['', [Validators.required]]
      ])
    });
  }

  get musicas(): FormArray {
    return this.pessoaForm.get('musicas') as FormArray;
  }

}
