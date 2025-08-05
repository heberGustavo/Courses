import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioListar } from '../../models/Usuario';

@Component({
  selector: 'app-editar',
  imports: [FormularioComponent],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{

  btnAcao = "Editar";
  descricaoTitulo = "Editar Usuário";
  
  usuario!: UsuarioListar;

  constructor(private usuarioService: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"));

    this.usuarioService.GetUsuarioPorId(id).subscribe(response => {
      this.usuario = response.dados;
    });
  }

}
