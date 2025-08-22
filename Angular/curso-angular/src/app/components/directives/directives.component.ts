import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [NgClass, NgStyle],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  size: number = 40;
  font: string = "Arial";
  color: string = "red";
  classes = ['green-title', 'title-50'];
  underline: string = 'underline';
}
