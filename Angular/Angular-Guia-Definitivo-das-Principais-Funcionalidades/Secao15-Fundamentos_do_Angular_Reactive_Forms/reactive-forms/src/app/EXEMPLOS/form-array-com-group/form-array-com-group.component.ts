import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-com-group',
  templateUrl: './form-array-com-group.component.html',
  styleUrl: './form-array-com-group.component.scss'
})
export class FormArrayComGroupComponent {
  musicasForm = new FormGroup({
    musicas: new FormArray([
      new FormGroup({
        id: new FormControl(this.idRandon),
        titulo: new FormControl('Inicial', [Validators.required]),
        banda: new FormControl('Inicial', [Validators.required])
      })
    ])
  });

  get idRandon(): string {
    return Math.floor(Math.random() * 100).toString();
  }

  get musicas(): FormArray {
    return this.musicasForm.get('musicas') as FormArray;
  }

  onClickAdicionarMusica() {
    this.musicas.push(
      new FormGroup({
        id: new FormControl(this.idRandon),
        titulo: new FormControl('Novo Titulo', [Validators.required]),
        banda: new FormControl('Nova Banda', [Validators.required])
      })
    );
  }

  onClickRemoverMusica(index: number) {
    this.musicas.removeAt(index);
  }
}
