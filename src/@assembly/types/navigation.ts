export interface AsmNavigationItem
{
    id: string;
    title: string;
    type: 'aside' | 'collapsable' | 'group' | 'item';
    icon?: string;
    hidden?: boolean;
    url?: string;
    externalUrl?: boolean;
    exactMatch?: boolean;
    classes?: string;
    function?: any;
    badge?: {
        title?: string;
        shape: 'rectangle' | 'rounded' | 'simple',
        background?: string;
        color?: string;
    };
    children?: AsmNavigationItem[];
}

export interface AsmNavigation extends AsmNavigationItem
{
    children?: AsmNavigationItem[];
}
