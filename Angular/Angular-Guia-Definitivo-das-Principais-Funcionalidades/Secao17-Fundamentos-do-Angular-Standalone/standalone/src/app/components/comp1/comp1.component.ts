import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TransformTextPipe } from '../../pipes/transform-text.pipe';
import { ChangeTextColorDirective } from "../../directives/change-text-color.directive";

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [CommonModule, TransformTextPipe, ChangeTextColorDirective],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component {

}
