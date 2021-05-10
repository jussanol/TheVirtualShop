import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../articulo.model';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {

  public idArticulo: number;
  public articulo!: Articulo;
  rebajado: boolean = false;

  constructor(private router: ActivatedRoute, private articuloService: ArticuloService) {
    this.idArticulo = this.router.snapshot.params.id;
  }

  ngOnInit(): void {
    this.articuloService.getArticulo(this.idArticulo).subscribe(articulo => this.articulo = articulo);
    if (this.articulo.precio != this.articulo.precioOferta) {
      this.rebajado = true;
    } else {
      this.rebajado = false;
    }
  }

}
