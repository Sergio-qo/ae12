import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../services/producto.service';

import { AngularFireAuth } from '@angular/fire/auth';

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

  constructor(private _productoService:ProductoService, private AFauth:AngularFireAuth) {  }

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
        "uid":this.AFauth.auth.currentUser.uid
      });
    }

    if (this.categoria == "tecnologia") {
      this._productoService.setProducto({
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "categoria": this.categoria,
        "precio": this.precio,
        "estado": this.estado,
        "uid":this.AFauth.auth.currentUser.uid
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
        "uid":this.AFauth.auth.currentUser.uid
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
        "uid":this.AFauth.auth.currentUser.uid
      });
    }
  }

}
