export interface IProducto{
    "id" : number,
    "nombre" : string,
    "descripcion" : string,
    "categoria" : string
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