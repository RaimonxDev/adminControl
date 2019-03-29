export interface AsmNavigationItem
{
    id?: string;
    title?: string;
    subtitle?: string;
    type: 'aside' | 'collapsable' | 'divider' | 'link' | 'subheader';
    hidden?: boolean;
    link?: string;
    externalLink?: boolean;
    exactMatch?: boolean;
    function?: any;
    classes?: string;
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
