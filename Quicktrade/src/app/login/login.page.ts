import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nomusu: string;
  pwd:string;
  constructor(private auth:AuthService, private router:Router) { }

  OnSubmitLogin() {
    this.auth.login(this.nomusu, this.pwd).then(auth => {
      this.router.navigate(['/inicio']);
    }).catch(err => console.log(err));
  }

  ngOnInit() {

  }

}
