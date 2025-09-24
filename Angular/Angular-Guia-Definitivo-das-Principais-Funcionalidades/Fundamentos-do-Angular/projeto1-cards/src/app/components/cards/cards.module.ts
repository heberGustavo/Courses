import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTypeComponent } from '../card-type/card-type.component';
import { CardComponent } from '../card/card.component';
import { CardValueComponent } from '../card-value/card-value.component';
import { CardButtonComponent } from '../card-button/card-button.component';

@NgModule({
  declarations: [
    CardComponent,
    CardTypeComponent,
    CardValueComponent,
    CardButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardTypeComponent,
    CardValueComponent,
    CardButtonComponent,
  ]
})
export class CardsModule { }
