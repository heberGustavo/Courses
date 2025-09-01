import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private API_URL: string = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }

  remover(id: number){
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.API_URL);
  }

  getById(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.API_URL}/${id}`);
  }
}
