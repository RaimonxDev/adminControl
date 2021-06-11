import { Productos } from 'app/core/products/models/productos.model';

export interface ListadoDeProductos {
  marca: string;
  productos: {
    perro: Productos[];
    gato: Productos[];
  };
}
