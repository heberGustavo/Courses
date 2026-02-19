import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDepartmentQuantityValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: DepartmentQuantityValidatorDirective,
    multi: true,
  }]
})
export class DepartmentQuantityValidatorDirective implements Validator {
  
  validate(control: AbstractControl): ValidationErrors | null {

    // if(!control.value)
    //   return null;
    
    const isInvalidDepartmentIT = control.value.departamento === "IT" && +control.value.quantidade > 10;
    const isInvalidDepartmentHR = control.value.departamento === "HR" && +control.value.quantidade > 20;

    if(isInvalidDepartmentIT)
      return { 'invalidITQuantity': true };
    
    if(isInvalidDepartmentHR)
      return { 'invalidHRQuantity': true };

    return null;
  }

}
