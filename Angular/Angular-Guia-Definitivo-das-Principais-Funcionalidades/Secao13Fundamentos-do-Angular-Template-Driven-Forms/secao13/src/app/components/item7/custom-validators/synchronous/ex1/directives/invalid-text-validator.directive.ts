import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appInvalidTextValidator]',
  providers: [ //Cadastra o validador
    {
      provide: NG_VALIDATORS,
      useExisting: InvalidTextValidatorDirective,
      multi: true,
    }
  ]
})
export class InvalidTextValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if(control.value){
      const isInvalid = control.value.includes('heber');
  
      return isInvalid ? { 'invalidText': true } : null;
    }

    return null;
  }

}
