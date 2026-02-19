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
    FormProfessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
