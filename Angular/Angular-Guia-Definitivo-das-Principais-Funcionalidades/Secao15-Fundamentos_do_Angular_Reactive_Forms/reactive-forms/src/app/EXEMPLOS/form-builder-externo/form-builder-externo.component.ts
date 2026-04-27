import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PessoaFormController } from './pessoa-form-controller';

@Component({
  selector: 'app-form-builder-externo',
  templateUrl: './form-builder-externo.component.html',
  styleUrl: './form-builder-externo.component.scss'
})
export class FormBuilderExternoComponent extends PessoaFormController {

  constructor(
    private readonly _fbMain: FormBuilder
  ) {
    super(_fbMain);
  }
}
