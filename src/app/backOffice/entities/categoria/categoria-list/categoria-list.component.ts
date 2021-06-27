import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/entities/categoria/categoria.model';
import { CategoriaService } from 'src/app/entities/categoria/categoria.service';
import { Filtro } from 'src/app/entities/Filtro/filtro.model';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit {

  lista: Categoria[] = [];
  aEliminar!: number;
  mensaje: String = "";
  error: boolean = false;

  //Variables de paginación 
  page: number = 0;
  size: number = 5;
  sort: string = "titulo,asc";
  first: boolean = false;
  last: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

  //Variable para filtros
  filtros: Filtro[] = [];
  filtroCategoria: string = "";
  filtroTitulo: string = "";


  constructor(
    private aServicio: CategoriaService
  ) { }

  ngOnInit(): void {
    this.obtenerCategorias(this.page, this.size, this.sort);
  }

  obtenerCategorias(page: number, size: number, sort: string) {
    this.aServicio.getCategoriasPagSeach(page, size, sort, this.filtros).subscribe((data: any) => {
      this.lista = data.content;
      this.first = data.first;
      this.last = data.last;
      this.totalElements = data.totalElements;
      this.totalPages = data.totalPages;
    });
  }

  navegarAnterior() {
    this.page = this.page - 1;
    this.obtenerCategorias(this.page, this.size, this.sort);
  }

  navegarSiguiente() {
    this.page = this.page + 1;
    this.obtenerCategorias(this.page, this.size, this.sort);
  }

  prepararEliminar(id: number) {
    this.aEliminar = id;
  }

  eliminar(id: number) {
    this.aServicio.eliminarCategoria(id).subscribe(
      (data: Categoria) => {
        this.obtenerCategorias(this.page, this.size, this.sort);
      },
      (err) => {
        this.mensaje = "Se produjo un error al borrar la categoria. Error: " + err.error;
        this.error = true;
      }
    )
  }

  buscar() {
    this.montarFiltros();
    this.obtenerCategorias(this.page, this.size, this.sort);
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

    if (this.filtroTitulo != "") {
      let filTitulo: Filtro = new Filtro();
      filTitulo.key = "titulo";
      filTitulo.value = this.filtroTitulo;
      filTitulo.operation = "MATCH";
      this.filtros.push(filTitulo);
    }
  }

  clear() {
    this.filtros = [];
    this.filtroCategoria = "";
    this.filtroTitulo = "";
    this.obtenerCategorias(this.page, this.size, this.sort);
  }

}
