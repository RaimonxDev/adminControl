import { Productos } from './productos.model';
export interface Marcas {
  _id: string;
  nombre: string;
  published_at: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  product?: string;
  products: Productos[];
  id: string;
}
