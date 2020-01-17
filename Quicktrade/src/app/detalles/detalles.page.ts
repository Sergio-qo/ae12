import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../services/producto.service';

import { ITecnologia } from '../interfaces';
import { IInmobiliaria } from '../interfaces';
import { IHogar } from '../interfaces';
import { IMotor } from '../interfaces';
import { IProducto } from '../interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  producto: (ITecnologia | IInmobiliaria | IHogar | IMotor);
  key: string = "";

  constructor(private _productoService: ProductoService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.key = this._activatedRoute.snapshot.paramMap.get('key');
    //this.producto = this._productoService.getProductoById(id);
    let ref = this._productoService.getProducto(this.key);

    /*ref.once("value", snapshot => {
      let nombre = snapshot.child("nombre").val();
      let descripcion = snapshot.child("descripcion").val();
      let estado = snapshot.child("estado").val();
      let categoria = snapshot.child("categoria").val();
      let precio = snapshot.child("precio").val();
      this.producto = {
        key: "",
        nombre: nombre,
        descripcion: descripcion,
        estado: estado,
        categoria: categoria,
        precio: precio
      }
    });*/

    ref.once("value", snapshot=>{
      this.producto = snapshot.val();
  });

    console.log(this.producto);
  }

}
