import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-pipes',
  templateUrl: './intro-pipes.component.html',
  styleUrl: './intro-pipes.component.scss',
})
export class IntroPipesComponent {
  pessoa1 = {
    name: 'Heber',
    status: 1,
  };

  pessoa2 = {
    name: 'Gustavo',
    status: 2,
  };

  pessoa3 = {
    name: 'Cruz',
    status: 3,
  };

  getStyle(status: number) {
    return {
      item1: status === 1,
      item2: status === 2,
      item3: status === 3,
    };
  }
}
