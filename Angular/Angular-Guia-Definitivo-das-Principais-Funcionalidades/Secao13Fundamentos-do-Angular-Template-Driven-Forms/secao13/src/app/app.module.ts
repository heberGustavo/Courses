import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Item1Component } from './components/item1/item1.component';
import { Item2Component } from './components/item2/item2.component';
import { Item3Component } from './components/item3/item3.component';
import { Item4Component } from './components/item4/item4.component';
import { Item5Component } from './components/item5/item5.component';
import { MainFormComponent } from './components/item6/main-form/main-form.component';
import { FormUserComponent } from './components/item6/form-user/form-user.component';
import { FormProfessionComponent } from './components/item6/form-profession/form-profession.component';
import { CustomValidatorFormEx1Component } from './components/item7/custom-validators/synchronous/ex1/custom-validator-form-ex1/custom-validator-form-ex1.component';
import { InvalidTextValidatorDirective } from './components/item7/custom-validators/synchronous/ex1/directives/invalid-text-validator.directive';
import { CustomValidatorFormEx2Component } from './components/item7/custom-validators/synchronous/ex2/custom-validator-form-ex2/custom-validator-form-ex2/custom-validator-form-ex2.component';
import { DepartmentQuantityValidatorDirective } from './components/item7/custom-validators/synchronous/ex2/directives/department-quantity-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    Item1Component,
    Item2Component,
    Item3Component,
    Item4Component,
    Item5Component,
    MainFormComponent,
    FormUserComponent,
    FormProfessionComponent,
    CustomValidatorFormEx1Component,
    InvalidTextValidatorDirective,
    CustomValidatorFormEx2Component,
    DepartmentQuantityValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
