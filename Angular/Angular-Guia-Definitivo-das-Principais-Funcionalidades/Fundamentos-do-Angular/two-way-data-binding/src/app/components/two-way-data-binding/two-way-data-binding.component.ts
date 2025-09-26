import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.scss'
})
export class TwoWayDataBindingComponent {
  nome: string = "Heber G";

  handleInputChange(value: string){
    this.nome = value;
  }
}
