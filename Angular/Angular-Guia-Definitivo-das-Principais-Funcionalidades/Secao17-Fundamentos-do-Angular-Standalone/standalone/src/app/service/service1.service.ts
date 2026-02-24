import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }

  getExemplo() {
    return of({
      nome: "Heber",
      idade: 27
    });
  }

}
