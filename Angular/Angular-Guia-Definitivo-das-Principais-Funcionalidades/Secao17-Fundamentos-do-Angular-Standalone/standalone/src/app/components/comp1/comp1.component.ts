import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TransformTextPipe } from '../../pipes/transform-text.pipe';
import { ChangeTextColorDirective } from "../../directives/change-text-color.directive";
import { Service1Service } from '../../service/service1.service';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [CommonModule, TransformTextPipe, ChangeTextColorDirective],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component implements OnInit {
  
  constructor(
    private readonly _service1: Service1Service
  ) {}

  ngOnInit(): void {
    this._service1.getExemplo().subscribe(console.log);
  }
}
