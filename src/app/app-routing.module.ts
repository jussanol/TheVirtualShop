import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloDetalleComponent } from './entities/articulo/articulo-detalle/articulo-detalle.component';
import { HomeComponent } from './home/home.component';
import { TiendaComponent } from './tienda/tienda/tienda.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: "tienda", component: TiendaComponent },
  { path: "tienda/:id", component: ArticuloDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
