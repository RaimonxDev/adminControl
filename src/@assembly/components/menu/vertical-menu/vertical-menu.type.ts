export interface AsmVerticalMenuItem
{
    id?: string;
    title?: string;
    subtitle?: string;
    type: 'basic' | 'collapsable' | 'divider' | 'spacer' | 'subheader';
    hidden?: boolean;
    link?: string;
    externalLink?: boolean;
    exactMatch?: boolean;
    function?: any;
    classes?: string;
    icon?: string;
    iconFontSet?: string;
    iconClassNames?: string;
    badge?: {
        title?: string;
        style?: 'rectangle' | 'rounded' | 'simple',
        background?: string;
        color?: string;
    };
    children?: AsmVerticalMenuItem[];
}

export interface AsmVerticalMenu extends AsmVerticalMenuItem
{
    children?: AsmVerticalMenuItem[];
}
