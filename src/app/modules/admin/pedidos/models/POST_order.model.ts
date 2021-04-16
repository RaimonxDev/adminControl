import { User, UserOrder } from '../../../../core/user/user.model';

export interface CreateOrder {
    order:             UserOrder[];
    user:              User;
    mensaje_adicional: string;
    transporte:        string
}

