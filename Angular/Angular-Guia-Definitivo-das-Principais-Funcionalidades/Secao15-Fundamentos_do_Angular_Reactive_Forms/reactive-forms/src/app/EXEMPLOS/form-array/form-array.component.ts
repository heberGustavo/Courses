import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss'
})
export class FormArrayComponent {
  musicasForm = new FormGroup({
    musicas: new FormArray([
      new FormControl('', [Validators.required]),
    ])
  });

  get musicas(): FormArray {
    return this.musicasForm.get('musicas') as FormArray;
  }

  get idRandon(): string{
    return Math.floor(Math.random() * 100).toString();
  }

  onClickAdicionarMusica() {
    this.musicas.push(
      new FormControl(`Novo item idRandon - ${this.idRandon}`, [Validators.required])
    );
  }

  onClickRemoverMusica(index: number) {
    this.musicas.removeAt(index);
  }
}
