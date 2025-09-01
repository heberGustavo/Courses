import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Animal } from '../../interfaces/Animal';
import { ListService } from '../../services/list.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-list-render',
  imports: [CommonModule, RouterLink],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animalsDetails: string = '';

  animais: Animal[] = [];

  constructor(private listService: ListService){
    this.getAnimals();
  }

  showAge(animal: Animal): void {
    this.animalsDetails = `O animal ${animal.name} tem ${animal.age} anos de idade!`;
  }

  removerAnimal(animal: Animal): void{
    this.animais = this.animais.filter((a) => animal.name !== a.name)
    
    this.listService.remover(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((x) => this.animais = x);
  }

}
