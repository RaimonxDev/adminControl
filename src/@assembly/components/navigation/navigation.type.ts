export interface AsmNavigationItem
{
    id: string;
    title?: string;
    subtitle?: string;
    type: 'aside' | 'basic' | 'collapsable' | 'divider' | 'subheader';
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
    children?: AsmNavigationItem[];
}

export type AsmNavigationAppearance = 'classic' | 'compact' | 'dense' | 'thin';
export type AsmNavigationMode = 'over' | 'side';
export type AsmNavigationPosition = 'left' | 'right';
