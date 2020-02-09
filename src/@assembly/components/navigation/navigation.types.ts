export interface AsmNavigationItem
{
    id?: string;
    title?: string;
    subtitle?: string;
    type: 'aside' | 'basic' | 'collapsable' | 'divider' | 'group' | 'spacer';
    hidden?: (item: AsmNavigationItem) => boolean;
    disabled?: boolean;
    link?: string;
    externalLink?: boolean;
    exactMatch?: boolean;
    function?: (item: AsmNavigationItem) => void;
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
    meta?: any;
}

export type AsmNavigationAppearance = 'classic' | 'compact' | 'dense' | 'thin';
export type AsmNavigationMode = 'over' | 'side';
export type AsmNavigationPosition = 'left' | 'right';
