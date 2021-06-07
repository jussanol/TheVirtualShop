import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/entities/banner/banner.model';
import { BannerService } from 'src/app/entities/banner/banner.service';

@Component({
  selector: 'app-banner-form',
  templateUrl: './banner-form.component.html',
  styleUrls: ['./banner-form.component.scss']
})
export class BannerFormComponent implements OnInit {

  error: boolean = false;
  succes: boolean = false;
  mensaje: string = '';

  banner!: Banner;
  bannerId!: number;
  modoAlta!: boolean;
  private BASE64: string = 'base64,';

  constructor(
    private bannerServicio: BannerService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.router.snapshot.paramMap.get('id')) {
      this.modoAlta = false;
      this.bannerId = this.router.snapshot.params.id;
      this.cargarDatos(this.bannerId);
    } else {
      this.modoAlta = true;
      this.banner = new Banner();
    }
  }

  cargarDatos(id: number): void {
    this.bannerServicio.getBanner(id).subscribe(
      (data: Banner) => {
        this.banner = data;
      },
      (err) => {
        this.mensaje = "Se produjo un error al recuperar los datos del banner. Error: " + err.error;
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
        this.banner.tipoImagen = reader.result!.toString().split(this.BASE64, 2)[0] + this.BASE64;
        this.banner.imagen = reader.result!.toString().split(this.BASE64, 2)[1];
      }
    };

  }

  public guardar(): void {

    this.error = false;
    this.succes = false;
    this.mensaje = "";

    this.bannerServicio.insertarBanner(this.banner).subscribe(
      (data: Banner) => {
        if (this.modoAlta) {
          this.mensaje = "Se ha guardado el banner con éxito ID: " + data.id;
          this.succes = true;
          this.banner = new Banner();
        } else {
          this.route.navigate(['/backOffice/bannerList']);
        }
      },
      (err) => {
        this.mensaje = "Se produjo un error al guardar la poción, ERROR: " + err.error;
        this.error = true;
      }
    )

  }

}
