import { Injectable } from '@angular/core';
import { Carousel } from './carousel.model';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  public obtenerCarousel(): Carousel[] {

    const carousel: Carousel[] = [];

    const elemento01 = new Carousel('Novedades', './assets/carousel/carousel01.jpg');
    const elemento02 = new Carousel('Descuentos', './assets/carousel/carousel02.jpg');
    const elemento03 = new Carousel('Newsletter', './assets/carousel/carousel03.jpg');

    carousel.push(elemento01);
    carousel.push(elemento02);
    carousel.push(elemento03);


    return carousel;

  }
}
