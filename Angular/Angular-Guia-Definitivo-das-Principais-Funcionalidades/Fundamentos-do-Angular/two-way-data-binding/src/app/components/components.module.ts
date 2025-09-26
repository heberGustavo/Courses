import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { TitleClassComponent } from './title-class/title-class.component';

@NgModule({
  declarations: [
    TwoWayDataBindingComponent,
    TitleClassComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TwoWayDataBindingComponent,
    TitleClassComponent,
  ]
})
export class ComponentsModule { }
