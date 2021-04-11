import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../articulo.model';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es';

registerLocaleData(localeFr, 'es');

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  @Input() articulo!: Articulo;
  rebajado: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.articulo.precio != this.articulo.precioOferta) {
      this.rebajado = true;
    } else {
      this.rebajado = false;
    }
  }


}
