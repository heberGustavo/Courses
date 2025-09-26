import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.scss'
})
export class NgIfComponent {
  visibility1: boolean = true;
  visibility2: boolean = true;

  toggleVisibility(opcao1: boolean = true){
    if(opcao1)
      this.visibility1 = !this.visibility1;
    else 
      this.visibility2 = !this.visibility2;
  }
}
