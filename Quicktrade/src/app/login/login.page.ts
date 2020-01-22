import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nomusu:string;
  constructor(private _usuarioService : UsuarioService) { }

  login(){
    
  }

  ngOnInit() {
  }

}
