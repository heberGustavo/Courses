import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { UsuarioListar } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ApiUrl:string = environment.UrlApi;

  constructor(private http: HttpClient) { }

  GetUsuarios(): Observable<Response<UsuarioListar[]>>{
    return this.http.get<Response<UsuarioListar[]>>(this.ApiUrl);
  }

  DeletarUsuario(id: number | undefined): Observable<Response<UsuarioListar[]>>{
    return this.http.delete<Response<UsuarioListar[]>>(`${this.ApiUrl}/${id}`);
  }

  CriarUsuario(usuario: UsuarioListar): Observable<Response<UsuarioListar>>{
    return this.http.post<Response<UsuarioListar>>(this.ApiUrl, usuario);
  }
}
