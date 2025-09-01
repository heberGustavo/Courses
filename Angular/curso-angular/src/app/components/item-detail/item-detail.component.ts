import { Component } from '@angular/core';
import { ListService } from '../../services/list.service';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../interfaces/Animal';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-item-detail',
  imports: [RouterLink],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {

  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute){
    this.getAnimalById();
  }

  getAnimalById(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getById(id).subscribe((x) => this.animal = x);
  }
}
