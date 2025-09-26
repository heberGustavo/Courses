import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { TitleClassComponent } from './title-class/title-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';

@NgModule({
  declarations: [
    TwoWayDataBindingComponent,
    TitleClassComponent,
    NgIfComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TwoWayDataBindingComponent,
    TitleClassComponent,
    NgIfComponent,
  ]
})
export class ComponentsModule { }
