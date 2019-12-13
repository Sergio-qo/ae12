import { Component } from '@angular/core';
import {ITecnologia} from '../interfaces';
import {IInmobiliaria} from '../interfaces';
import {IHogar} from '../interfaces';
import {IMotor} from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre : string = "";
  descripcion : string = "";
  categoria : string = "";
  estado : string = "";
  metros : number;
  numhab : number;
  numba : number;
  localidad : string = "";
  tipov : string = "";
  km : number;


  constructor() {}

  cambiarCategoria(categoria){
    this.categoria = categoria;
  }

  insertar(){

  }

}
