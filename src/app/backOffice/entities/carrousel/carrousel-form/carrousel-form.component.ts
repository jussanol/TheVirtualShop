import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carousel } from 'src/app/entities/carousel/carousel.model';
import { CarouselService } from 'src/app/entities/carousel/carousel.service';

@Component({
  selector: 'app-carrousel-form',
  templateUrl: './carrousel-form.component.html',
  styleUrls: ['./carrousel-form.component.scss']
})
export class CarrouselFormComponent implements OnInit {

  error: boolean = false;
  succes: boolean = false;
  mensaje: string = '';

  obj!: Carousel;
  objId!: number;
  modoAlta!: boolean;

  private BASE64: string = 'base64,';

  constructor(
    private aServicio: CarouselService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.router.snapshot.paramMap.get('id')) {
      this.modoAlta = false;
      this.objId = this.router.snapshot.params.id;
      this.cargarDatos(this.objId);
    } else {
      this.modoAlta = true;
      this.obj = new Carousel();
    }
  }

  cargarDatos(id: number): void {
    this.aServicio.getCarrousel(id).subscribe(
      (data: Carousel) => {
        this.obj = data;
      },
      (err) => {
        this.mensaje = "Se produjo un error al recuperar los datos del carrousel. Error: " + err.error;
        ;
        this.error = true;
      }

    );
  }

  public procesarImagen(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        this.obj.imagen = reader.result!.toString().split(this.BASE64, 2)[1];
      }
    };

  }

  public guardar(): void {

    this.error = false;
    this.succes = false;
    this.mensaje = "";

    this.aServicio.insertarCarrousel(this.obj).subscribe(
      (data: Carousel) => {
        if (this.modoAlta) {
          this.mensaje = "Se ha guardado el carrousel con éxito ID: " + data.id;
          this.succes = true;
          this.obj = new Carousel();
        } else {
          this.route.navigate(['/backOffice/carrouselList']);
        }
      },
      (err) => {
        this.mensaje = "Se produjo un error al guardar la poción, ERROR: " + err.error;
        this.error = true;
      }
    )

  }

}
