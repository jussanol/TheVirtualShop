import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  constructor() { }

  @Input() categorias: Categoria[] = [];

  ngOnInit(): void {
  }

}
