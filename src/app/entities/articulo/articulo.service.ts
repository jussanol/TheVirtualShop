import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
