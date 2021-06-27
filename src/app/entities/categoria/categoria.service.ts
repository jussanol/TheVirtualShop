import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filtro } from '../Filtro/filtro.model';
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

  public getCategoriasPag(page: number, size: number, sort: string): Observable<Categoria[]> {
    const paramPage = "?page=" + page + "&size=" + size + "&sort=" + sort;
    const urlEndPoint = this.API_URL + "categorias-pag" + paramPage;
    return this.http.get<Categoria[]>(urlEndPoint);
  }

  public getCategoriasPagSeach(page: number, size: number, sort: string, filtros: Filtro[]): Observable<Categoria[]> {

    const paramPage = "?page=" + page + "&size=" + size + "&sort=" + sort;
    const urlEndPoint = this.API_URL + "categorias-pag-spec" + paramPage;

    return this.http.post<Categoria[]>(urlEndPoint, filtros);
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
