import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloFormComponent } from './backOffice/entities/articulo/articulo-form/articulo-form.component';
import { ArticuloListComponent } from './backOffice/entities/articulo/articulo-list/articulo-list.component';
import { BannerFormComponent } from './backOffice/entities/banner/banner-form/banner-form.component';
import { BannerListComponent } from './backOffice/entities/banner/banner-list/banner-list.component';
import { CarrouselFormComponent } from './backOffice/entities/carrousel/carrousel-form/carrousel-form.component';
import { CarrouselListComponent } from './backOffice/entities/carrousel/carrousel-list/carrousel-list.component';
import { CategoriaFormComponent } from './backOffice/entities/categoria/categoria-form/categoria-form.component';
import { CategoriaListComponent } from './backOffice/entities/categoria/categoria-list/categoria-list.component';
import { HomeBackOfficeComponent } from './backOffice/home-back-office/home-back-office.component';
import { ArticuloDetalleComponent } from './entities/articulo/articulo-detalle/articulo-detalle.component';
import { HomeComponent } from './home/home.component';
import { TiendaComponent } from './tienda/tienda/tienda.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: "tienda", component: TiendaComponent },
  { path: "tienda/:id", component: ArticuloDetalleComponent },
  { path: "backOffice", component: HomeBackOfficeComponent },
  { path: "backOffice/articuloList", component: ArticuloListComponent },
  { path: "backOffice/articuloForm", component: ArticuloFormComponent },
  { path: "backOffice/articuloForm/:id", component: ArticuloFormComponent },
  { path: "backOffice/bannerList", component: BannerListComponent },
  { path: "backOffice/bannerForm", component: BannerFormComponent },
  { path: "backOffice/bannerForm/:id", component: BannerFormComponent },
  { path: "backOffice/carrouselList", component: CarrouselListComponent },
  { path: "backOffice/carrouselForm", component: CarrouselFormComponent },
  { path: "backOffice/carrouselForm/:id", component: CarrouselFormComponent },
  { path: "backOffice/categoriaList", component: CategoriaListComponent },
  { path: "backOffice/categoriaForm", component: CategoriaFormComponent },
  { path: "backOffice/categoriaForm/:id", component: CategoriaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
