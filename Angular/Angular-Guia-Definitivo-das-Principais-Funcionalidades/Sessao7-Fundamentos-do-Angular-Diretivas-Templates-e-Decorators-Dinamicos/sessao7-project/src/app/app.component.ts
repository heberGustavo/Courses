import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _cdRef: ChangeDetectorRef){}
  
  teste = "Heber Gustavo";

  changeDetaction(){
    this._cdRef.detectChanges();
  }
}
