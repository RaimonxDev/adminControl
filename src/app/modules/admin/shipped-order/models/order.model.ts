export interface OrderResponse {
    _id:                string;
    order:              Order[];
    titulo?:            string;
    published_at:       Date;
    createdAt:          Date;
    updatedAt:          Date;
    __v:                number;
    customer:           Customer;
    mensaje_adicional?: string;
    id:                 string;
    transporte?:        string;
}

export interface Customer {
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
    id:                   string;
}

export interface Order {
    id:         string;
    cantidad:   number | string;
    code?:      string;
    producto?:  string;
    valorNeto?: number;
}

