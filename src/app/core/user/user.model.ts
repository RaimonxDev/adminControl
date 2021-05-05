export interface UserSignIn {
  jwt: string;
  user: User;
}

export interface User {
  confirmed: boolean;
  blocked: boolean;
  statusOnline: string;
  _id: string;
  username: string;
  email: string;
  telefono: number;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  role: Role;
  comuna: string;
  direccion: string;
  nombre_representante: string;
  region: string;
  rut_empresa: string;
  customers: any[];
  orders: UserOrder[];
  id: string;
  avatar?: string;
  password?: string;
}

export interface UserOrder {
  procesada: boolean;
  pagada: boolean;
  _id: string;
  published_at: Date;
  transporte: string;
  mensaje_adicional: string;
  order: OrderList[];
  factura: any[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  customer: string;
  user: User;
  id: string;
}

export interface OrderList {
  code: string;
  id: string;
  cantidad: string;
  producto: string;
  valorNeto: number;
}

export interface Role {
  _id: string;
  name: string;
  description: string;
  type: string;
  __v: number;
  id: string;
}

export interface RegisterNewUser {
  email: string;
  username: string;
  password: string;
}
