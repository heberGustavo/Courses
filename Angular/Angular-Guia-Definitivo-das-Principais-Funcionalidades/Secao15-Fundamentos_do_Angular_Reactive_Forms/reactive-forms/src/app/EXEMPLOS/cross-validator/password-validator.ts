import { AbstractControl, ValidationErrors } from "@angular/forms";

export const passwordValidator = (control: AbstractControl): ValidationErrors | null => {
    
    const senha = control.get('senha');
    const confirmarSenha = control.get('confirmarSenha');

    if(senha?.value !== confirmarSenha?.value) {
        confirmarSenha?.setErrors({ invalidPassword: true });

        return { invalidPassword: true };
    }

    return null;
}