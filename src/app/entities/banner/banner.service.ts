import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from './banner.model';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  private API_URL: String = "http://localhost:8080/api/";

  public getBanners(): Observable<Banner[]> {
    return this.http.get<Banner[]>(this.API_URL + "banners");

  }

  public getBanner(id: number): Observable<Banner> {
    const urlEndPoint = this.API_URL + "banner/" + id;
    return this.http.get<Banner>(urlEndPoint);
  }

  public insertarBanner(banner: Banner): Observable<any> {
    const urlEndPoint = this.API_URL + "banners";
    return this.http.post<Banner>(urlEndPoint, banner);
  }

  public modificarBanner(banner: Banner): Observable<any> {
    const urlEndPoint = this.API_URL + "banners";
    return this.http.put<Banner>(urlEndPoint, banner);
  }

  public eliminarBanner(idBanner: number): Observable<Banner> {
    const urlEndPoint = this.API_URL + "banner/" + idBanner;
    return this.http.delete<Banner>(urlEndPoint);
  }
}
