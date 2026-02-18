import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Item1Component } from './components/item1/item1.component';
import { Item2Component } from './components/item2/item2.component';

@NgModule({
  declarations: [
    AppComponent,
    Item1Component,
    Item2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
