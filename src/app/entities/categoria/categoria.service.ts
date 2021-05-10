import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  public obtenerCategorias(): Observable<Categoria[]> {
    const urlEndPoint = "http://localhost:8080/api/categorias";
    return this.http.get<Categoria[]>(urlEndPoint);
  }
}
