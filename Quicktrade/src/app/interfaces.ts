export interface IProducto{
    "key":string,
    "nombre" : string,
    "descripcion" : string,
    "categoria" : string,
    "precio" : number
}

export interface ITecnologia extends IProducto{
    "estado" : string
}

export interface IInmobiliaria extends IProducto{
    "metros" : number,
    "numhab" : number,
    "numba" : number,
    "localidad" : string
}

export interface IMotor extends IProducto{
    "tipov" : string,
    "km" : number
}

export interface IHogar extends IProducto{

}