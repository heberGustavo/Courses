import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from './comp2.component';
import { ShowTextModule } from '../../pipes/show-text/show-text.module';

@NgModule({
  declarations: [
    Comp2Component
  ],
  imports: [
    CommonModule,
    ShowTextModule,
  ],
  exports: [
    Comp2Component,
  ],
})
export class Comp2Module { }
