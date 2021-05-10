import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from './banner.model';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  public obtenerBanners(): Observable<Banner[]> {

    const urlEndPoint = "http://localhost:8080/api/banners";
    return this.http.get<Banner[]>(urlEndPoint);

  }
}
