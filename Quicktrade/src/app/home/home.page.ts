import { Component } from '@angular/core';
import { ITecnologia } from '../interfaces';
import { IInmobiliaria } from '../interfaces';
import { IHogar } from '../interfaces';
import { IMotor } from '../interfaces';
import {ToastController} from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /*nombre: string = "";
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

  productos: (ITecnologia | IInmobiliaria | IHogar | IMotor)[] = [
    {
      "id" : 1,
    "nombre" : "casa1",
    "descripcion" : "casa1",
    "categoria" : "hogar",
    "precio" : 500000
    },

    {
    "id" : 1,
    "nombre" : "casa1",
    "descripcion" : "casa1",
    "categoria" : "tecnologia",
    "estado":"Usado",
    "precio" : 500
    },
  ];

  constructor(private _toastCtrl : ToastController) { }

  async presentToast(){
    const toast = await this._toastCtrl.create({
      message:"Se ha añadido un elemento",
      duration:200
    });
    toast.present();
  }

  cambiarCategoria(categoria) {
    this.categoria = categoria;
  }

  insertar() {
    if (this.categoria == "hogar") {
      this.productos.push({
        "id": this.productos.length + 1,
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "categoria": this.categoria,
        "precio": this.precio
      });
    }

    if (this.categoria == "tecnologia") {
      this.productos.push({
        "id": this.productos.length + 1,
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "categoria": this.categoria,
        "precio": this.precio,
        "estado": this.estado
      });
    }

    if (this.categoria == "inmobiliaria") {
      this.productos.push({
        "id": this.productos.length + 1,
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "categoria": this.categoria,
        "precio": this.precio,
        "metros": this.metros,
        "numhab" : this.numhab,
        "numba" : this.numba,
        "localidad" : this.localidad
      });
    }

    if (this.categoria == "motor") {
      this.productos.push({
        "id": this.productos.length + 1,
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "categoria": this.categoria,
        "precio": this.precio,
        "tipov":this.tipov,
        "km":this.km
      });
    }
    this.presentToast();
  }*/

}
