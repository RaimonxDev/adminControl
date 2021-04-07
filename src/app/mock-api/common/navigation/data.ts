/* tslint:disable:max-line-length */
import { TreoNavigationItem } from '@treo/components/navigation';

export const defaultNavigation: TreoNavigationItem[] = [
    {
        id      : 'starter',
        title   : 'Starter',
        subtitle: 'Treo Starter Kit',
        type    : 'group',
        icon    : 'apps',
        children: [
            {
                id   : 'starter.example',
                title: 'Example component',
                type : 'basic',
                link : '/example'
            },
            {
                id   : 'starter.dummy.1',
                title: 'Dummy menu item #1',
                type : 'basic'
            },
            {
                id   : 'starter.dummy.2',
                title: 'Dummy menu item #1',
                type : 'basic'
            }
        ]
    }
];
export const compactNavigation: TreoNavigationItem[] = [
    {
        id      : 'starter',
        title   : 'Starter',
        type    : 'aside',
        icon    : 'apps',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: TreoNavigationItem[] = [
    {
        id   : 'pedidos',
        title: 'Pedidos',
        type : 'collapsable',
        icon : 'heroicons_outline:document-text',
        children: [
        {
            id   : 'crear-pedido',
            title: 'Crear Nuevo Pedido',
            type : 'basic',
            icon : 'heroicons_outline:document-add',
            link : 'orders/create'
        },
        {
            id   : 'ver-pedidos',
            title: 'Pedidos Enviados',
            type : 'basic',
            icon : 'mat_outline:local_shipping',
            link : 'orders/shipped'
        }
        ]
    },
   {
        id   : 'clientes',
        title: 'Clientes',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/customers'
    }
];
export const horizontalNavigation: TreoNavigationItem[] = [
    {
        id      : 'starter',
        title   : 'Starter',
        type    : 'group',
        icon    : 'apps',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
