export interface AsmNavigationItem
{
    id: string;
    title: string;
    type: 'aside' | 'collapsable' | 'group' | 'item';
    hidden?: boolean;
    url?: string;
    externalUrl?: boolean;
    exactMatch?: boolean;
    function?: any;
    classNames?: string;
    icon?: string;
    iconFontSet?: string;
    badge?: {
        title?: string;
        style?: 'rectangle' | 'rounded' | 'simple',
        background?: string;
        color?: string;
    };
    children?: AsmNavigationItem[];
}

export interface AsmNavigation extends AsmNavigationItem
{
    children?: AsmNavigationItem[];
}
