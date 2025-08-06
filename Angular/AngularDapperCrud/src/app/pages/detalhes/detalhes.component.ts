import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioListar } from '../../models/Usuario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  imports: [FormularioComponent],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{
  descricaoTitulo = "Detalhes Usuário";

  usuario!: UsuarioListar;

  constructor(private usuarioService: UsuarioService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"));

    this.usuarioService.GetUsuarioPorId(id).subscribe(response => {
      this.usuario = response.dados;
    });
  }

}
