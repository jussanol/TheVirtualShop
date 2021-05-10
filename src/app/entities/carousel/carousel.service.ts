import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carousel } from './carousel.model';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }

  public obtenerCarousel(): Observable<Carousel[]> {
    const urlEndPoint = "http://localhost:8080/api/carrousels";
    return this.http.get<Carousel[]>(urlEndPoint);
  }
}
