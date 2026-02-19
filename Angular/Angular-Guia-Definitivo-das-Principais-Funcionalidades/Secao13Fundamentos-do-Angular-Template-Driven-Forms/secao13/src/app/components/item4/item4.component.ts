import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-item4',
  templateUrl: './item4.component.html',
  styleUrl: './item4.component.scss'
})
export class Item4Component implements AfterViewInit {
  nome: string = '';
  descricao: string = '';
  pais: string = '1';
  radioButton: string = '1';
  checkbox: boolean = false;
  
  @ViewChild('meuForm') meuForm!: NgForm; // para acessar a instância do formulário
  @ViewChild('meuInputNome') meuInputNome!: NgModel; // para acessar a instância do input nome
  
  ngAfterViewInit(): void {
    this.meuForm.valueChanges?.subscribe((form) => {
      // console.log('form', form);
    });
  }

  onSubmit(form: NgForm) {
    console.log('ngForm', form.value);
  }

}
