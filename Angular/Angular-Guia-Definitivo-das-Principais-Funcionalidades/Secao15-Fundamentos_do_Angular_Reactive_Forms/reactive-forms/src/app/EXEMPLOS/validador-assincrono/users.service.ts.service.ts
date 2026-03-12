import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getUsers() : Observable<User[]> {
    return this._httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

}
