export interface Productos {
  _id: string;
  published_at: Date;
  isNewProduct: boolean;
  disponible: boolean;
  precioSugerido: number;
  valorNeto: number;
  mascota: string;
  peso: number;
  marca: string;
  producto: string;
  code_uid: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
  stock?: number;
  barcode?: string;
}
