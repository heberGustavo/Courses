import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TemplateVariableChangeDetactionComponent } from './components/template-variable-change-detaction/template-variable-change-detaction.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateVariableChangeDetactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
