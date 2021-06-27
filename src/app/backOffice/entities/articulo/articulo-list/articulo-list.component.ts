import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/entities/articulo/articulo.model';
import { ArticuloService } from 'src/app/entities/articulo/articulo.service';
import { Filtro } from 'src/app/entities/Filtro/filtro.model';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.scss']
})
export class ArticuloListComponent implements OnInit {

  listaArticulos: Articulo[] = [];
  articuloEliminar!: number;
  mensaje: String = "";
  error: boolean = false;

  //Variables de paginación 
  page: number = 0;
  size: number = 5;
  sort: string = "nombre,asc";
  first: boolean = false;
  last: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

  //Variable para filtros
  filtros: Filtro[] = [];
  filtroCategoria: string = "";
  filtroNombre: string = "";
  filtroPrecioDesde: string = "";
  filtroPrecioHasta: string = "";

  constructor(private articuloServicio: ArticuloService) { }

  ngOnInit(): void {
    this.obtenerArticulos(this.page, this.size, this.sort);
  }

  obtenerArticulos(page: number, size: number, sort: string) {
    this.articuloServicio.getArticulosPagSeach(page, size, sort, this.filtros).subscribe((data: any) => {
      this.listaArticulos = data.content;
      this.first = data.first;
      this.last = data.last;
      this.totalElements = data.totalElements;
      this.totalPages = data.totalPages;
    });
  }

  navegarAnterior() {
    this.page = this.page - 1;
    this.obtenerArticulos(this.page, this.size, this.sort);
  }

  navegarSiguiente() {
    this.page = this.page + 1;
    this.obtenerArticulos(this.page, this.size, this.sort);
  }

  prepararEliminar(articuloID: number) {
    this.articuloEliminar = articuloID;
  }

  eliminar(articuloID: number) {
    this.articuloServicio.eliminarArticulo(articuloID).subscribe(
      (data: Articulo) => {
        this.obtenerArticulos(this.page, this.size, this.sort);
      },
      (err) => {
        this.mensaje = "Se produjo un error al borrar el articulo. Error: " + err.error;
        this.error = true;
      }
    )
  }

  buscar() {
    this.montarFiltros();
    this.obtenerArticulos(this.page, this.size, this.sort);
  }

  montarFiltros() {

    this.filtros = [];

    if (this.filtroCategoria != "") {
      let filCategoria: Filtro = new Filtro();
      filCategoria.key = "categoria";
      filCategoria.value = this.filtroCategoria;
      filCategoria.operation = "MATCH";
      this.filtros.push(filCategoria);
    }

    if (this.filtroNombre != "") {
      let filNombre: Filtro = new Filtro();
      filNombre.key = "nombre";
      filNombre.value = this.filtroNombre;
      filNombre.operation = "MATCH";
      this.filtros.push(filNombre);
    }

    if (this.filtroPrecioDesde != "") {
      let filPrecioD: Filtro = new Filtro();
      filPrecioD.key = "precio";
      filPrecioD.value = this.filtroPrecioDesde;
      filPrecioD.operation = "GREATER_THAN_EQUAL";
      this.filtros.push(filPrecioD);
    }

    if (this.filtroPrecioHasta != "") {
      let filPrecioH: Filtro = new Filtro();
      filPrecioH.key = "precio";
      filPrecioH.value = this.filtroPrecioDesde;
      filPrecioH.operation = "LESS_THAN_EQUAL";
      this.filtros.push(filPrecioH);
    }
  }

  clear() {
    this.filtros = [];
    this.filtroCategoria = "";
    this.filtroNombre = "";
    this.filtroPrecioDesde = "";
    this.filtroPrecioHasta = "";
    this.obtenerArticulos(this.page, this.size, this.sort);
  }

}
