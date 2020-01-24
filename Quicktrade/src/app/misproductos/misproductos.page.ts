import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { ITecnologia, IInmobiliaria, IHogar, IMotor, IKey } from '../interfaces';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-misproductos',
  templateUrl: './misproductos.page.html',
  styleUrls: ['./misproductos.page.scss'],
})
export class MisproductosPage implements OnInit {

  productos: (ITecnologia | IInmobiliaria | IHogar | IMotor & IKey)[] = [];
  categoria:string;
  uid:string;

  constructor(private _activatedRoute: ActivatedRoute, private _productoService: ProductoService, private AFauth:AngularFireAuth) { }

  eliminar(key){
    let ref = this._productoService.getProducto(key);
    ref.remove();
  }

  cambiarCategoria(categoria){
    this.categoria = categoria;
  }

  ngOnInit() {
    this.uid = this.AFauth.auth.currentUser.uid;
    let ref = this._productoService.getProductos();
    ref.orderByChild("uid").equalTo(this.uid).once("value", snapshot => {
      snapshot.forEach(child => {
        //console.log(child.val());
        this.productos.push(child.val());
        this.productos[this.productos.length - 1].key = child.key;
      });
    }
    );
  }

}
