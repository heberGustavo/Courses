import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-profession',
  templateUrl: './form-profession.component.html',
  styleUrl: './form-profession.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }] //vai estar referenciado com a instancia de formulário mais proxima dele
})
export class FormProfessionComponent {

}
