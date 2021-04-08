import { Injectable } from '@angular/core';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  public obtenerCategorias(): Categoria[] {

    const categorias: Categoria[] = [];

    const elemento01 = new Categoria('Moda mujer', './assets/categorias/categoria01.jpg', 'moda mujer');
    const elemento02 = new Categoria('Moda infantil', './assets/categorias/categoria02.jpg', 'moda infantil');
    const elemento03 = new Categoria('Moda hombre', './assets/categorias/categoria03.jpg', 'moda hombre');
    const elemento04 = new Categoria('Calzado', './assets/categorias/categoria04.jpg', 'calzado');
    const elemento05 = new Categoria('Moda deporte', './assets/categorias/categoria05.jpg', 'moda deporte');

    categorias.push(elemento01);
    categorias.push(elemento02);
    categorias.push(elemento03);
    categorias.push(elemento04);
    categorias.push(elemento05);


    return categorias;

  }
}
