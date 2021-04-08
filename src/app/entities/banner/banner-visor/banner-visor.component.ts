import { Component, Input, OnInit } from '@angular/core';
import { Banner } from '../banner.model';

@Component({
  selector: 'app-banner-visor',
  templateUrl: './banner-visor.component.html',
  styleUrls: ['./banner-visor.component.scss']
})
export class BannerVisorComponent implements OnInit {

  constructor() { }

  @Input() banners: Banner[] = [];

  ngOnInit(): void {
  }

}
