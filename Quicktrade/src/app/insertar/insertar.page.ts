import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../services/producto.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.page.html',
  styleUrls: ['./insertar.page.scss'],
})
export class InsertarPage implements OnInit {

  nombre: string = "";
  descripcion: string = "";
  categoria: string = "";
  estado: string = "";
  metros: number;
  numhab: number;
  numba: number;
  localidad: string = "";
  tipov: string = "";
  km: number;
  precio: number;

  constructor(private _activatedRoute: ActivatedRoute, private _productoService:ProductoService) {  }

  ngOnInit() {
  }

  cambiarCategoria(categoria) {
    this.categoria = categoria;
  }

  insertar() {
    if (this.categoria == "hogar") {
      this._productoService.setProducto({
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "categoria": this.categoria,
        "precio": this.precio,
        "uid":this._activatedRoute.snapshot.paramMap.get('id')
      });
    }

    if (this.categoria == "tecnologia") {
      this._productoService.setProducto({
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "categoria": this.categoria,
        "precio": this.precio,
        "estado": this.estado,
        "uid":this._activatedRoute.snapshot.paramMap.get('id')
      });
    }

    if (this.categoria == "inmobiliaria") {
      this._productoService.setProducto({
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "categoria": this.categoria,
        "precio": this.precio,
        "metros": this.metros,
        "numhab" : this.numhab,
        "numba" : this.numba,
        "localidad" : this.localidad,
        "uid":this._activatedRoute.snapshot.paramMap.get('id')
      });
    }

    if (this.categoria == "motor") {
      this._productoService.setProducto({
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "categoria": this.categoria,
        "precio": this.precio,
        "tipov":this.tipov,
        "km":this.km,
        "uid":this._activatedRoute.snapshot.paramMap.get('id')
      });
    }
  }

}
