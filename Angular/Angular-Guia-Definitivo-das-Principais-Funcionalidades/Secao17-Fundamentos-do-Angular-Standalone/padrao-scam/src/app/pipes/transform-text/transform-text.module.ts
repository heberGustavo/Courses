import { TransformTextPipe } from './transform-text.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TransformTextPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TransformTextPipe,
  ]
})
export class TransformTextModule { }
