import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/entities/banner/banner.model';
import { BannerService } from 'src/app/entities/banner/banner.service';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.scss']
})
export class BannerListComponent implements OnInit {

  listaBanner: Banner[] = [];
  bannerEliminar!: number;
  mensaje: String = "";
  error: boolean = false;

  constructor(private bannerServicio: BannerService) { }

  ngOnInit(): void {
    this.bannerServicio.getBanners().subscribe((banners: Banner[]) => {
      this.listaBanner = banners;
    });
  }

  prepararEliminar(bannerID: number) {
    this.bannerEliminar = bannerID;
  }

  eliminar(bannerID: number) {
    this.bannerServicio.eliminarBanner(bannerID).subscribe(
      (data: Banner) => {
        this.bannerServicio.getBanners().subscribe((data: Banner[]) => { this.listaBanner = data });
      },
      (err) => {
        this.mensaje = "Se produjo un error al borrar el articulo. Error: " + err.error;
        this.error = true;
      }
    )
  }

}
