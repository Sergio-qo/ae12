import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nomusu:string;
  pwd:string;
  pwdr:string;

  constructor(private auth:AuthService, private router:Router) { }

  OnSubmitRegister(){
    if(this.pwd != this.pwdr){
      alert("Las contraseñas no coinciden");
    }
    else{
      this.auth.register(this.nomusu, this.pwd).then(auth => {
        console.log(auth);
        this.router.navigate(['/inicio']);
      }).catch(err => console.log(err));
    }
  }

  ngOnInit() {
  }

}
