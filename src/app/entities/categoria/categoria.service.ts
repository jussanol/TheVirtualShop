import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private API_URL: String = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  public getCategorias(): Observable<Categoria[]> {
    const urlEndPoint = this.API_URL + "categorias";
    return this.http.get<Categoria[]>(urlEndPoint);
  }


  public getCategoria(id: number): Observable<Categoria> {
    const urlEndPoint = this.API_URL + "categoria/" + id;
    return this.http.get<Categoria>(urlEndPoint);
  }

  public insertarCategoria(obj: Categoria): Observable<any> {
    const urlEndPoint = this.API_URL + "categorias";
    return this.http.post<Categoria>(urlEndPoint, obj);
  }

  public modificarCategoria(obj: Categoria): Observable<any> {
    const urlEndPoint = this.API_URL + "categorias";
    return this.http.put<Categoria>(urlEndPoint, obj);
  }

  public eliminarCategoria(id: number): Observable<Categoria> {
    const urlEndPoint = this.API_URL + "categoria/" + id;
    return this.http.delete<Categoria>(urlEndPoint);
  }
}
