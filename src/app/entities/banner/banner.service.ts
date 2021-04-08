import { Injectable } from '@angular/core';
import { Banner } from './banner.model';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor() { }

  public obtenerBanners(): Banner[] {

    const banners: Banner[] = [];

    const elemento01 = new Banner('Bricolage', './assets/banner/banner01.gif', 'Todo lo que necesitas para tu jardín');
    const elemento02 = new Banner('Gourmet', './assets/banner/banner03.jpeg', 'Todo lo que neceitas para tu mascota');
    const elemento03 = new Banner('Mascotas', './assets/banner/banner02.jpeg', 'Ideas gourmet');

    banners.push(elemento01);
    banners.push(elemento02);
    banners.push(elemento03);


    return banners;

  }
}
