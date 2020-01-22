import {Injectable} from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { IUsuario } from '../interfaces';

@Injectable()

export class UsuarioService{
    constructor(private _db:AngularFireDatabase){}

    getIdUsuByNom(nomusu){
        let ref = this._db.database.ref("usuarios");
        ref.orderByChild("nombre").equalTo(nomusu);
        //return ref;
    }
}