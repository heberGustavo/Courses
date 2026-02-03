import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HighLightDirective } from './directives/highlight.directive';
import { SemDiretivaComponent } from './components/sem-diretiva/sem-diretiva.component';
import { ComDiretivaComponent } from './components/com-diretiva/com-diretiva.component';
import { TemplateVariablesChangeDetactionComponent } from './components/template-variables-change-detaction/template-variables-change-detaction.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateVariablesChangeDetactionComponent,
    SemDiretivaComponent,
    ComDiretivaComponent,
    HighLightDirective,
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
