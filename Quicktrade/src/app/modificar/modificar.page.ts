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

  key:string;
  producto: (ITecnologia | IInmobiliaria | IHogar | IMotor);
  nombre:string;
  descripcion:string;
  precio:number;
  estado:string;
  metros:string;
  numhab:string;
  numba:string;
  localidad:string;
  tipov:string;
  km:string;

  constructor(private _activatedRoute:ActivatedRoute, private _productoService:ProductoService) { }

  modificar(){
    let ref = this._productoService.getProducto(this.key);
    ref.child("nombre").set(this.nombre);
    ref.child("descripcion").set(this.descripcion);
    ref.child("precio").set(this.precio);
    ref.child("estado").set(this.estado);
    ref.child("metros").set(this.metros);
    ref.child("numhab").set(this.numhab);
    ref.child("numba").set(this.numba);
    ref.child("localidad").set(this.localidad);
    ref.child("tipov").set(this.tipov);
    ref.child("km").set(this.km);
  }

  ngOnInit() {
    this.key = this._activatedRoute.snapshot.paramMap.get("key");
    let ref = this._productoService.getProducto(this.key);
    ref.once("value", snapshot=>{
      this.producto = snapshot.val();
  });
  }

}
