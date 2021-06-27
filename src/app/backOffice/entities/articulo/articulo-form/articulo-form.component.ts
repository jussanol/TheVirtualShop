import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/entities/articulo/articulo.model';
import { ArticuloService } from 'src/app/entities/articulo/articulo.service';

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.scss']
})
export class ArticuloFormComponent implements OnInit {

  error: boolean = false;
  succes: boolean = false;
  mensaje: string = '';

  articulo!: Articulo;
  articuloId!: number;
  modoAlta!: boolean;
  oferta: boolean = false;
  private BASE64: string = 'base64,';

  constructor(
    private articuloServicio: ArticuloService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.router.snapshot.paramMap.get('id')) {
      this.modoAlta = false;
      this.articuloId = this.router.snapshot.params.id;
      this.cargarDatosArticulo(this.articuloId);
    } else {
      this.modoAlta = true;
      this.articulo = new Articulo();
    }
  }

  cargarDatosArticulo(articuloID: number): void {
    this.articuloServicio.getArticulo(this.articuloId).subscribe(
      (data: Articulo) => {
        this.articulo = data;
        if (this.articulo.precio != this.articulo.precioOferta) {
          this.oferta = true;
        }
      },
      (err) => {
        this.mensaje = "Se produjo un error al recuperar los datos del articulo. Error: " + err.error;
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
        this.articulo.tipoImagen = reader.result!.toString().split(this.BASE64, 2)[0] + this.BASE64;
        this.articulo.imagen = reader.result!.toString().split(this.BASE64, 2)[1];
      }
    };

  }

  public procesarOferta(event: any) {
    this.oferta = true;
  }

  public guardar(): void {

    this.error = false;
    this.succes = false;
    this.mensaje = "";

    if (!this.oferta) {
      this.articulo.precioOferta = this.articulo.precio;
    }

    this.articuloServicio.insertarArticulo(this.articulo).subscribe(
      (data: Articulo) => {
        if (this.modoAlta) {
          this.mensaje = "Se ha guardado el articulo con éxito ID: " + data.id;
          this.succes = true;
          this.articulo = new Articulo();
        } else {
          this.route.navigate(['/backOffice/articuloList']);
        }
      },
      (err) => {
        this.mensaje = "Se produjo un error al guardar el articulo, ERROR: " + err.error;
        this.error = true;
      }
    )

  }

}
