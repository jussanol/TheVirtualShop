import { Component, OnInit } from '@angular/core';
import { Carousel } from '../entities/carousel/carousel.model';
import { CarouselService } from '../entities/carousel/carousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carouseles: Carousel[] = []

  constructor(
    private carouselService: CarouselService
  ) { }

  ngOnInit(): void {
    this.carouseles = this.carouselService.obtenerCarousel();
  }

}
