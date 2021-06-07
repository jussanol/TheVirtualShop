import { Component, OnInit } from '@angular/core';
import { Banner } from '../entities/banner/banner.model';
import { BannerService } from '../entities/banner/banner.service';
import { Carousel } from '../entities/carousel/carousel.model';
import { CarouselService } from '../entities/carousel/carousel.service';
import { Categoria } from '../entities/categoria/categoria.model';
import { CategoriaService } from '../entities/categoria/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carouseles: Carousel[] = [];
  tituloBanners = 'Ya es primavera';
  banners: Banner[] = [];
  tituloCategorias = 'Navega por categorías';
  categorias: Categoria[] = [];

  constructor(
    private carouselService: CarouselService,
    private bannerService: BannerService,
    private categoriaServide: CategoriaService
  ) { }

  ngOnInit(): void {
    this.carouselService.getCarrousels().subscribe(carrousels => this.carouseles = carrousels);
    this.bannerService.getBanners().subscribe(banners => this.banners = banners);
    this.categoriaServide.getCategorias().subscribe(categorias => this.categorias = categorias);
  }

}
