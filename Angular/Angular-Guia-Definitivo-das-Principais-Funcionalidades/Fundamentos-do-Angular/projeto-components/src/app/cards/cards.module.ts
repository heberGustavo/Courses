import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';

@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
  ],
})
export class CardsModule { }
