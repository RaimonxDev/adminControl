export interface CreateOrder {
    order:             Order[];
    customer:          Customer;
    mensaje_adicional: string;
    transporte: string
}

export interface Customer {
    _id: string;
    nombre_comercial: string
}

export interface Order {
    id:       string;
    cantidad: number;
}
