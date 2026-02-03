import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';

import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';

@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
  ],
  imports: [
    CommonModule,
    MatSliderModule,
  ],
  exports: [
    CardComponent,
  ],
})
export class CardsModule { }
