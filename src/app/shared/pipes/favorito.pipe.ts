import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favorito'
})
export class FavoritoPipe implements PipeTransform {

  transform(favorito: boolean): String {
    if (favorito) {
      return "<img class='favorito' src='./assets/favoritos/favorito_true.png'></img>";
    } else {
      return "<img class='favorito' src='./assets/favoritos/favorito_false.png'></img>";
    }
  }

}
