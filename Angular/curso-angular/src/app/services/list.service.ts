import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remover(animals: Animal[], animalDeleted: Animal): Animal[]{
    console.log("Ativando o service!");
    return animals.filter((a) => animalDeleted.name !== a.name);
  }
}
