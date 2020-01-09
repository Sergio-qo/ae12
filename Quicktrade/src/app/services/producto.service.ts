import { Injectable } from '@angular/core';
import { ITecnologia } from '../interfaces';
import { IInmobiliaria } from '../interfaces';
import { IHogar } from '../interfaces';
import { IMotor } from '../interfaces';
import { IProducto } from '../interfaces';

@Injectable()



export class ProductoService{

    productos: (ITecnologia | IInmobiliaria | IHogar | IMotor)[] = [
        {
          "id" : 1,
        "nombre" : "casa1",
        "descripcion" : "casa1",
        "categoria" : "hogar",
        "precio" : 500000
        },
    
        {
        "id" : 2,
        "nombre" : "casa1",
        "descripcion" : "casa1",
        "categoria" : "tecnologia",
        "estado":"Usado",
        "precio" : 500
        },
      ];

    getProductos():(ITecnologia | IInmobiliaria | IHogar | IMotor)[] {
        return this.productos;
    }

    getProductoById(id):(ITecnologia | IInmobiliaria | IHogar | IMotor)[] {
        
        let producto = null;
        
        this.productos.forEach(element => {
            if(element.id == id){
                producto = element;
            }
        });
        return producto;
    }
}