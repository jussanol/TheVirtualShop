import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/entities/articulo/articulo.model';
import { ArticuloService } from 'src/app/entities/articulo/articulo.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  tituloTienda = "Articulos descatados";
  articulos: Articulo[] = [];

  constructor(
    private articuloService: ArticuloService
  ) { }

  ngOnInit(): void {
    this.articulos = this.articuloService.getArticulos();
  }

}
