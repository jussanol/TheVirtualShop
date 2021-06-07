import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/entities/categoria/categoria.model';
import { CategoriaService } from 'src/app/entities/categoria/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

  error: boolean = false;
  succes: boolean = false;
  mensaje: string = '';

  obj!: Categoria;
  objId!: number;
  modoAlta!: boolean;

  private BASE64: string = 'base64,';

  constructor(
    private aServicio: CategoriaService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.router.snapshot.paramMap.get('id')) {
      this.modoAlta = false;
      this.objId = this.router.snapshot.params.id;
      this.cargarDatos(this.objId);
    } else {
      this.modoAlta = true;
      this.obj = new Categoria();
    }
  }

  cargarDatos(id: number): void {
    this.aServicio.getCategoria(id).subscribe(
      (data: Categoria) => {
        this.obj = data;
      },
      (err) => {
        this.mensaje = "Se produjo un error al recuperar los datos de la categoria. Error: " + err.error;
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
        this.obj.tipoImagen = reader.result!.toString().split(this.BASE64, 2)[0] + this.BASE64;
        this.obj.imagen = reader.result!.toString().split(this.BASE64, 2)[1];
      }
    };

  }

  public guardar(): void {

    this.error = false;
    this.succes = false;
    this.mensaje = "";

    this.aServicio.insertarCategoria(this.obj).subscribe(
      (data: Categoria) => {
        if (this.modoAlta) {
          this.mensaje = "Se ha guardado la categoría con éxito ID: " + data.id;
          this.succes = true;
          this.obj = new Categoria();
        } else {
          this.route.navigate(['/backOffice/categoriaList']);
        }
      },
      (err) => {
        this.mensaje = "Se produjo un error al guardar la categoría, ERROR: " + err.error;
        this.error = true;
      }
    )

  }

}


