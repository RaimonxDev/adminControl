export interface ProductsAdded {
  id: string;
  cantidad: string|number;
  producto: string,
  valorNeto?: number,
  precioSugerido?: number,
  disponible?: boolean,
  total?:number,
   code?: string
}
