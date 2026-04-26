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
      this.criarGrupoMusica()
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
      this.criarGrupoMusica()
    );
  }

  onClickRemoverMusica(index: number) {
    this.musicas.removeAt(index);
  }

  private criarGrupoMusica(): FormGroup {
    return new FormGroup({
      id: new FormControl(this.idRandon),
      titulo: new FormControl('Novo Titulo', [Validators.required]),
      banda: new FormControl('Nova Banda', [Validators.required])
    })
  }
}
