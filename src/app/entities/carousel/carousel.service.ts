import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carousel } from './carousel.model';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }

  private API_URL: String = "http://localhost:8080/api/";

  public getCarrousels(): Observable<Carousel[]> {
    const urlEndPoint = this.API_URL + "carrousels";
    return this.http.get<Carousel[]>(urlEndPoint);
  }

  public getCarrousel(id: number): Observable<Carousel> {
    const urlEndPoint = this.API_URL + "carrousel/" + id;
    return this.http.get<Carousel>(urlEndPoint);
  }

  public insertarCarrousel(obj: Carousel): Observable<any> {
    const urlEndPoint = this.API_URL + "carrousels";
    return this.http.post<Carousel>(urlEndPoint, obj);
  }

  public modificarCarrousel(obj: Carousel): Observable<any> {
    const urlEndPoint = this.API_URL + "carrousels";
    return this.http.put<Carousel>(urlEndPoint, obj);
  }

  public eliminarCarrousel(id: number): Observable<Carousel> {
    const urlEndPoint = this.API_URL + "carrousel/" + id;
    return this.http.delete<Carousel>(urlEndPoint);
  }

}
