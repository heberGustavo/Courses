import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1.component';
import { TransformTextModule } from '../../pipes/transform-text/transform-text.module';
import { ShowTextModule } from '../../pipes/show-text/show-text.module';

@NgModule({
  declarations: [
    Comp1Component,
  ],
  imports: [
    CommonModule,
    TransformTextModule,
    ShowTextModule,
  ],
  exports: [
    Comp1Component,
  ]
})
export class Comp1Module { }
