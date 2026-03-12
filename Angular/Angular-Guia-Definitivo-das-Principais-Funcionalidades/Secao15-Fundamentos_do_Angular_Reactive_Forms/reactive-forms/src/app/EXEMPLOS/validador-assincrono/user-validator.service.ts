import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';
import { UsersService } from './users.service.ts.service';

@Injectable({
  providedIn: 'root'
})
export class UserValidatorService implements AsyncValidator {

  constructor(
    private readonly _usersService: UsersService
  ) {}

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    
    if(!control.dirty)
      return of(null);
    
    return this._usersService.getUsers().pipe(
      delay(2000),
      map((usersList) => {
        const hasUser = usersList.find((user) => user.name.toLowerCase() === control.value.trim().toLowerCase());

        return hasUser ? null : { userValidator: true };
      })
    );
  }

}
