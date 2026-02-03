import { Component } from '@angular/core';

@Component({
  selector: 'app-sem-diretiva',
  templateUrl: './sem-diretiva.component.html',
  styleUrl: './sem-diretiva.component.scss'
})
export class SemDiretivaComponent {
  onMouseEnter(event: Event){
    const element = event.target as HTMLParagraphElement;
    element.style.backgroundColor = 'red';
    console.log('red');
  }

  onMouseLeave(event: Event){
    const element = event.target as HTMLParagraphElement;
    element.style.backgroundColor = 'blue';
    console.log('blue');
  }
}
