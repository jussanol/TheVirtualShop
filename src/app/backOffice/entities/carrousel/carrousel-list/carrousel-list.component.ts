import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/entities/carousel/carousel.model';
import { CarouselService } from 'src/app/entities/carousel/carousel.service';

@Component({
  selector: 'app-carrousel-list',
  templateUrl: './carrousel-list.component.html',
  styleUrls: ['./carrousel-list.component.scss']
})
export class CarrouselListComponent implements OnInit {

  lista: Carousel[] = [];
  aEliminar!: number;
  mensaje: String = "";
  error: boolean = false;

  constructor(
    private aServicio: CarouselService
  ) { }

  ngOnInit(): void {
    this.aServicio.getCarrousels().subscribe((data: Carousel[]) => {
      this.lista = data;
    });
  }

  prepararEliminar(id: number) {
    this.aEliminar = id;
  }

  eliminar(id: number) {
    this.aServicio.eliminarCarrousel(id).subscribe(
      (data: Carousel) => {
        this.aServicio.getCarrousels().subscribe((data: Carousel[]) => { this.lista = data });
      },
      (err) => {
        this.mensaje = "Se produjo un error al borrar el carrousel. Error: " + err.error;
        this.error = true;
      }
    )
  }

}
