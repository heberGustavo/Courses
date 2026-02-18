import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'secao13';

  nome = 'Angular';
  nome2 = 'Two-way-data-binding';

  getChange1(text: string){
    console.log(text);
  }
  
  show(){
    console.log(this.nome2);
  }
}
