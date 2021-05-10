import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './entities/carousel/carousel/carousel.component';
import { BannerVisorComponent } from './entities/banner/banner-visor/banner-visor.component';
import { CategoriaComponent } from './entities/categoria/categoria/categoria.component';
import { TiendaComponent } from './tienda/tienda/tienda.component';
import { ArticuloComponent } from './entities/articulo/articulo/articulo.component';
import { FavoritoPipe } from './shared/pipes/favorito.pipe';
import { ArticuloDetalleComponent } from './entities/articulo/articulo-detalle/articulo-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    BannerVisorComponent,
    CategoriaComponent,
    TiendaComponent,
    ArticuloComponent,
    FavoritoPipe,
    ArticuloDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
