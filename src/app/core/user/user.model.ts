export interface UserSingIn {
    jwt:  string;
    user: User;
}

export interface User {
    confirmed: boolean;
    blocked:   boolean;
    _id:       string;
    username:  string;
    email:     string;
    provider:  string;
    createdAt: Date;
    updatedAt: Date;
    statusOnline: string;
    __v:       number;
    role:      Role;
    customers: Customer[];
    id:        string;
    avatar?:   string
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
    published_at:         Date;
    createdAt:            Date;
    updatedAt:            Date;
    __v:                  number;
    seller:               string;
    nombre_representante: string;
    id:                   string;
}

export interface Role {
    _id:         string;
    name:        string;
    description: string;
    type:        string;
    __v:         number;
    id:          string;
}
