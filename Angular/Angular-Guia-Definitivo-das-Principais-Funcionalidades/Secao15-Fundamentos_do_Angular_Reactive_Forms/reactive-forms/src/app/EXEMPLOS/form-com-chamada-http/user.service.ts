import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUserMock(): Observable<any> {
    return of({
      nome: 'Heber Gustavo',
      idade: 28,
      ativo: true,
      endereco: {
        rua: 'Rua dos Lobos',
        numero: 123,
      },
      telefones: [
        { 
          numero: 1911111111,
          ddd: 11
        },
        {
          numero: 1999999999,
          ddd: 19
        }
      ]
    });
  }
}
