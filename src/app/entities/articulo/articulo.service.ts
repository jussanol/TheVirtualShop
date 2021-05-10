import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from './articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }


  public getArticulos(): Observable<Articulo[]> {
    const urlEndPoint = "http://localhost:8080/api/articulos";
    return this.http.get<Articulo[]>(urlEndPoint);
  }

  public getArticulo(id: number): Observable<Articulo> {
    const urlEndPoint = "http://localhost:8080/api/articulo/" + id;
    return this.http.get<Articulo>(urlEndPoint);
  }
}
