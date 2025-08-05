import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioListar } from '../../models/Usuario';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  usuarios: UsuarioListar[] = [];
  usuariosGeral: UsuarioListar[] = [];

  constructor(private serviceUsuario: UsuarioService) {
    
  }

  //Roda quando inicia o componente. Interface: OnInit
  ngOnInit(): void {
    this.serviceUsuario.GetUsuarios().subscribe(response => {
      this.usuarios = response.dados;
      this.usuariosGeral = response.dados;
    });
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.usuarios = this.usuariosGeral.filter(usuario => {
      return usuario.nomeCompleto.toLowerCase().includes(value);
    });
  }

  deletarUsuario(id: number | undefined){
    console.log("dasd");
    this.serviceUsuario.DeletarUsuario(id).subscribe(response => {
      this.usuarios = response.dados;
      this.usuariosGeral = response.dados;
    });
  }

  getSituacaoDescricao(situacao: boolean): string{
    return situacao ? "Ativo" : "Inativo";
  }
}
