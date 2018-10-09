export interface AsmNavigationItem
{
    id: string;
    title: string;
    type: 'item' | 'group' | 'collapsable' | 'aside';
    icon?: string;
    hidden?: boolean;
    url?: string;
    externalUrl?: boolean;
    exactMatch?: boolean;
    classes?: string;
    function?: any;
    badge?: {
        title?: string;
        translate?: string;
        background?: string;
        foreground?: string;
    };
    children?: AsmNavigationItem[];
}

export interface AsmNavigation extends AsmNavigationItem
{
    children?: AsmNavigationItem[];
}
