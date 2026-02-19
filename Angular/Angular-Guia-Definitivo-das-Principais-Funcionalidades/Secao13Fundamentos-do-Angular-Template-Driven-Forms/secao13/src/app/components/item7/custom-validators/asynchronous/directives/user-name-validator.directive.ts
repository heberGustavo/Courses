import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';
import { UsersService } from '../service/users.service';

@Directive({
  selector: '[appUserNameValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => UserNameValidatorDirective),
    multi: true,
  }]
})
export class UserNameValidatorDirective implements AsyncValidator {

  constructor(private _usersService: UsersService) {}

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const inputSemValor = !control.dirty;

    if(inputSemValor)
      return of(null);
    
    return this._usersService.getUsers().pipe(
      delay(3000),
      map((users) => {
        const foundUser = users.find((user) => user.name === control.value);

        if(foundUser)
          return null;

        return { 'invalidUserName': true };
      })
    );

  }

}
