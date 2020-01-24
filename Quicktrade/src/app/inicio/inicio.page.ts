import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _usuarioService : UsuarioService, private AFauth:AngularFireAuth) { }
  
  //id:string;
  uid:string;

  ngOnInit() {
    this.uid = this.AFauth.auth.currentUser.uid;
    /*let nomusu = this._activatedRoute.snapshot.paramMap.get("nomusu");
    let ref = this._usuarioService.getUsuarios();
    ref.orderByChild("usuarios").equalTo(nomusu);
    ref.once("value", snapshot=>{
      snapshot.forEach(child => {

        console.log(child.val().nombre);

        if(child.val().nombre == nomusu){
          this.id = child.val().id;
        }
          });
        });*/
  }

}
