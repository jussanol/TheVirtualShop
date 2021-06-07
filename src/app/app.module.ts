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
import { HomeBackOfficeComponent } from './backOffice/home-back-office/home-back-office.component';
import { ArticuloFormComponent } from './backOffice/entities/articulo/articulo-form/articulo-form.component';
import { ArticuloListComponent } from './backOffice/entities/articulo/articulo-list/articulo-list.component';
import { BannerListComponent } from './backOffice/entities/banner/banner-list/banner-list.component';
import { BannerFormComponent } from './backOffice/entities/banner/banner-form/banner-form.component';
import { FormsModule } from '@angular/forms';
import { CarrouselListComponent } from './backOffice/entities/carrousel/carrousel-list/carrousel-list.component';
import { CarrouselFormComponent } from './backOffice/entities/carrousel/carrousel-form/carrousel-form.component';
import { CategoriaListComponent } from './backOffice/entities/categoria/categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './backOffice/entities/categoria/categoria-form/categoria-form.component';


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
    ArticuloDetalleComponent,
    HomeBackOfficeComponent,
    ArticuloFormComponent,
    ArticuloListComponent,
    BannerListComponent,
    BannerFormComponent,
    CarrouselListComponent,
    CarrouselFormComponent,
    CategoriaListComponent,
    CategoriaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
