import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TemplateVariablesChangeDetactionComponent } from './components/template-variables-change-detaction/template-variables-change-detaction.component';
import { SemDiretivaComponent } from './components/sem-diretiva/sem-diretiva.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateVariablesChangeDetactionComponent,
    SemDiretivaComponent,
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
