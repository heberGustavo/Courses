import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-template-variables-change-detaction',
  templateUrl: './template-variables-change-detaction.component.html',
  styleUrl: './template-variables-change-detaction.component.scss'
})
export class TemplateVariablesChangeDetactionComponent {
  
  constructor(private _cdRef: ChangeDetectorRef) { }

  teste = "Heber Gustavo";

  changeDetaction() {
    this._cdRef.detectChanges();
  }
}
