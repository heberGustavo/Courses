import { NgModule } from "@angular/core";

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        MatButtonModule, 
        MatDividerModule, 
        MatIconModule,
    ],
    exports: [
        MatButtonModule, 
        MatDividerModule, 
        MatIconModule
    ]
})
export class AngularMaterialModule {

}