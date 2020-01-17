import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

import { ITecnologia } from '../interfaces';
import { IInmobiliaria } from '../interfaces';
import { IHogar } from '../interfaces';
import { IMotor } from '../interfaces';
import { IKey } from '../interfaces';
import { IProducto } from '../interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  productos:(ITecnologia & IInmobiliaria & IHogar & IMotor & IKey)[] = [];

  constructor(private _productoService : ProductoService) { }

  ngOnInit() {
    //this.productos = this._productoService.getProductos();
    let ref = this._productoService.getProductos();
    ref.once("value", snapshot=>{
      snapshot.forEach(child => {
        //console.log(child.val());
        this.productos.push(child.val());
        this.productos[this.productos.length - 1].key = child.key;
    });
  });
}

}
