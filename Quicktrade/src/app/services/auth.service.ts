import {Injectable} from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { IUsuario } from '../interfaces';
import { identifierModuleUrl } from '@angular/compiler';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router'
import { reject } from 'q';

@Injectable()

export class AuthService{
    constructor(private AFauth:AngularFireAuth, private router:Router){}

    login(email:string, password:string){
        return new Promise ((resolve, rejected) => {
            this.AFauth.auth.signInWithEmailAndPassword(email, password).then(res => {
                resolve(res);
            }).catch(err => rejected(err));
        });
    }

    logout(){
        this.AFauth.auth.signOut().then(() => {
            this.router.navigate(['/login']);
        });
    }

    register(email:string, password:string){
        return new Promise ((resolve, reject) => {
            this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
                resolve(res);
            }).catch(err => reject(err));
        });
    }
}