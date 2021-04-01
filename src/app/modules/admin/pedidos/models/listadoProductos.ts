import { Productos } from './productoResponse';

export interface ListadoDeProductos {
  marca:string,
  productos: {
    perro: Productos[],
    gato: Productos[]
  }
}