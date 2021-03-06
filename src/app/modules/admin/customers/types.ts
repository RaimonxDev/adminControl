export interface Customer {
    _id:                  string;
    nombre_comercial:     string;
    email:                string;
    telefono:             number;
    rut_empresa:          string;
    Direccion:            string;
    Comuna:               string;
    Region:               string;
    published_at:         Date;
    createdAt:            Date;
    updatedAt:            Date;
    __v:                  number;
    seller:               Account;
    nombre_representante: string;
    orders:               CustomersOrder[];
    id:                   string;
}

export interface CustomersOrder {
    _id:                string;
    order:              Order[];
    mensaje_adicional:  string;
    published_at:       Date;
    createdAt:          Date;
    updatedAt:          Date;
    __v:                number;
    customer:           string;
    id:                 string;
}

export interface Order {
    id:       string;
    cantidad: number;
}

export interface Account {
    confirmed: boolean;
    blocked:   boolean;
    _id:       string;
    username:  string;
    email:     string;
    provider:  string;
    createdAt: Date;
    updatedAt: Date;
    __v:       number;
    role:      string;
    id:        string;
    statusOnline?: null | string;
}



export interface Regions {
    _id:          string;
    data:         Data;
    published_at: Date;
    createdAt:    Date;
    updatedAt:    Date;
    __v:          number;
    id:           string;
}

export interface Data {
    regions: Region[];
}

export interface Region {
    name:        string;
    romanNumber: string;
    number:      string;
    communes:    Commune[];
}

export interface Commune {
    name: string;
}
export interface RegisterCustomer{
  email:string,
  password: string,
  username: string
}

export interface UpdateAccountCustomer {
    _id:                  string;
    nombre_comercial:     string;
    email:                string;
    telefono:             number;
    rut_empresa:          string;
    Direccion:            string;
    Comuna:               string;
    Region:               string;
    nombre_representante: null;
    published_at:         Date;
    createdAt:            Date;
    updatedAt:            Date;
    __v:                  number;
    seller:               Account;
    customer:             Account;
    orders:               any[];
    id:                   string;
}
