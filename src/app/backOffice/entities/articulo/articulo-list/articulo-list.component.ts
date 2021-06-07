import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/entities/articulo/articulo.model';
import { ArticuloService } from 'src/app/entities/articulo/articulo.service';

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

  constructor(private articuloServicio: ArticuloService) { }

  ngOnInit(): void {
    this.articuloServicio.getArticulos().subscribe((articulos: Articulo[]) => {
      this.listaArticulos = articulos;
    });
  }

  prepararEliminar(articuloID: number) {
    alert(articuloID);
    this.articuloEliminar = articuloID;
  }

  eliminar(articuloID: number) {
    this.articuloServicio.eliminarArticulo(articuloID).subscribe(
      (data: Articulo) => {
        this.articuloServicio.getArticulos().subscribe((data: Articulo[]) => { this.listaArticulos = data });
      },
      (err) => {
        this.mensaje = "Se produjo un error al borrar el articulo. Error: " + err.error;
        this.error = true;
      }
    )
  }

}
