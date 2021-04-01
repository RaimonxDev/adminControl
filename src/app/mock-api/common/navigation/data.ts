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
        type : 'basic',
        icon : 'heroicons_outline:view-list',
        link :  '/pedidos'  
    },
   {
        id   : 'clientes',
        title: 'Clientes',
        type : 'basic',
        icon : 'heroicons_outline:users',
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
