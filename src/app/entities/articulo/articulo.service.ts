import { Injectable } from '@angular/core';
import { Articulo } from './articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private articulos: Articulo[] = [];

  constructor() {
    this.pullAllArticulos();
  }

  private pullAllArticulos() {

    const elemento01 = new Articulo(1, 'LEGGING DEPORTIVO CICLISTA', './assets/tienda/tienda01.jpg', 6.99, false, 6.99);
    const elemento02 = new Articulo(2, 'Deportivo básico', './assets/tienda/tienda02.jpg', 11.99, true, 11.99);
    const elemento03 = new Articulo(3, 'Camiseta con estanpado de Palmeras', './assets/tienda/tienda03.jpg', 8.99, false, 8.99);
    const elemento04 = new Articulo(4, 'BERMUDA CHINO MICROESTAMPADA CON CINTURÓN', './assets/tienda/tienda04.jpg', 18.99, false, 17.99);
    const elemento05 = new Articulo(5, 'PACK DE 2 VESTIDOS BÁSICOS ESTAMPADOS DE MANGA CORTA', './assets/tienda/tienda05.jpg', 9.99, false, 9.99);
    const elemento06 = new Articulo(6, 'Sandalias tiras colores', './assets/tienda/tienda06.jpg', 18.99, true, 17.99);
    const elemento07 = new Articulo(7, 'CAMISETA ESTAMPADA DE SNOOPY PEANUTS™', './assets/tienda/tienda07.jpg', 6.99, true, 6.99);
    const elemento08 = new Articulo(8, 'Sandalia cruzada', './assets/tienda/tienda08.jpg', 17.99, false, 17.99);

    this.articulos.push(elemento01);
    this.articulos.push(elemento02);
    this.articulos.push(elemento03);
    this.articulos.push(elemento04);
    this.articulos.push(elemento05);
    this.articulos.push(elemento06);
    this.articulos.push(elemento07);
    this.articulos.push(elemento08);
  }

  public getArticulos(): Articulo[] {
    return this.articulos;
  }

  public getArticulo(id: number): Articulo | undefined {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].id == id) {
        return this.articulos[i];
      }
    }
    return undefined;
  }
}
