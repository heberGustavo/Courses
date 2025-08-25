import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  showMessage: boolean = true;

  changeVisibility(): void {
    this.showMessage = !this.showMessage;
  }
}
