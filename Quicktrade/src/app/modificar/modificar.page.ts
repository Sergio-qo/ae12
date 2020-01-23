import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITecnologia, IInmobiliaria, IHogar, IMotor } from '../interfaces';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  key: string;
  producto: (ITecnologia & IInmobiliaria & IHogar & IMotor) = { "nombre": "", "descripcion": "", "precio": 0, "estado": "", "metros": 0, "numhab": 0, "numba": 0, "localidad": "", "tipov": "", "km": 0 };

  constructor(private _activatedRoute: ActivatedRoute, private _productoService: ProductoService) { }

  modificar() {
    let ref = this._productoService.getProducto(this.key);

    ref.once("value", snapshot => {
      if (snapshot.child("categoria").val() == "hogar") {
        ref.child("nombre").set(this.producto.nombre);
        ref.child("descripcion").set(this.producto.descripcion);
        ref.child("precio").set(this.producto.precio);
      }

      if (snapshot.child("categoria").val() == "tecnologia") {
        ref.child("nombre").set(this.producto.nombre);
        ref.child("descripcion").set(this.producto.descripcion);
        ref.child("precio").set(this.producto.precio);
        ref.child("estado").set(this.producto.estado);
      }

      if (snapshot.child("categoria").val() == "inmobiliaria") {
        ref.child("nombre").set(this.producto.nombre);
        ref.child("descripcion").set(this.producto.descripcion);
        ref.child("precio").set(this.producto.precio);
        ref.child("metros").set(this.producto.metros);
        ref.child("numhab").set(this.producto.numhab);
        ref.child("numba").set(this.producto.numba);
        ref.child("localidad").set(this.producto.localidad);
      }

      if (snapshot.child("categoria").val() == "motor") {
        ref.child("nombre").set(this.producto.nombre);
        ref.child("descripcion").set(this.producto.descripcion);
        ref.child("precio").set(this.producto.precio);
        ref.child("tipov").set(this.producto.tipov);
        ref.child("km").set(this.producto.km);
      }
    }

    );
  }

  ngOnInit() {
    this.key = this._activatedRoute.snapshot.paramMap.get("key");
    let ref = this._productoService.getProducto(this.key);
    ref.once("value", snapshot => {
      this.producto = snapshot.val();
    });
  }

}
