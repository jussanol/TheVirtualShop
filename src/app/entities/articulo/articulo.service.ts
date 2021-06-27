import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filtro } from '../Filtro/filtro.model';
import { Articulo } from './articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }

  private API_URL: String = "http://localhost:8080/api/";

  public getArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.API_URL + "articulos");
  }

  public getArticulosPag(page: number, size: number, sort: string): Observable<Articulo[]> {
    const paramPage = "?page=" + page + "&size=" + size + "&sort=" + sort;
    const urlEndPoint = this.API_URL + "articulos-pag" + paramPage;
    return this.http.get<Articulo[]>(urlEndPoint);
  }

  public getArticulosPagSeach(page: number, size: number, sort: string, filtros: Filtro[]): Observable<Articulo[]> {

    const paramPage = "?page=" + page + "&size=" + size + "&sort=" + sort;
    const urlEndPoint = this.API_URL + "articulos-pag-spec" + paramPage;

    return this.http.post<Articulo[]>(urlEndPoint, filtros);
  }

  public getArticulo(id: number): Observable<Articulo> {
    const urlEndPoint = this.API_URL + "articulo/" + id;
    return this.http.get<Articulo>(urlEndPoint);
  }

  public insertarArticulo(articulo: Articulo): Observable<any> {
    const urlEndPoint = this.API_URL + "articulos";
    return this.http.post<Articulo>(urlEndPoint, articulo);
  }

  public modificarArticulo(articulo: Articulo): Observable<any> {
    const urlEndPoint = this.API_URL + "articulos";
    return this.http.put<Articulo>(urlEndPoint, articulo);
  }

  public eliminarArticulo(idArticulo: number): Observable<Articulo> {
    const urlEndPoint = this.API_URL + "articulos/" + idArticulo;
    return this.http.delete<Articulo>(urlEndPoint);
  }
}
