import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/entities/categoria/categoria.model';
import { CategoriaService } from 'src/app/entities/categoria/categoria.service';

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

  constructor(
    private aServicio: CategoriaService
  ) { }

  ngOnInit(): void {
    this.aServicio.getCategorias().subscribe((data: Categoria[]) => {
      this.lista = data;
    });
  }

  prepararEliminar(id: number) {
    this.aEliminar = id;
  }

  eliminar(id: number) {
    this.aServicio.eliminarCategoria(id).subscribe(
      (data: Categoria) => {
        this.aServicio.getCategorias().subscribe((data: Categoria[]) => { this.lista = data });
      },
      (err) => {
        this.mensaje = "Se produjo un error al borrar la categoria. Error: " + err.error;
        this.error = true;
      }
    )
  }

}
