import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { TitleClassComponent } from './title-class/title-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PersonComponent } from './person/person.component';
import { NgStyleComponent } from './ng-style/ng-style.component';

@NgModule({
  declarations: [
    TwoWayDataBindingComponent,
    TitleClassComponent,
    NgIfComponent,
    NgForComponent,
    PersonComponent,
    NgStyleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TwoWayDataBindingComponent,
    TitleClassComponent,
    NgIfComponent,
    NgForComponent,
    PersonComponent,
    NgStyleComponent,
  ]
})
export class ComponentsModule { }
