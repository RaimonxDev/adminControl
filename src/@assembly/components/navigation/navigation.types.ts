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
    iconClasses?: string;
    badge?: {
        title?: string;
        style?: 'rectangle' | 'rounded' | 'simple',
        background?: string;
        color?: string;
    };
    children?: AsmNavigationItem[];
    meta?: any;
}

export type AsmVerticalNavigationAppearance = string;
export type AsmVerticalNavigationMode = 'over' | 'side';
export type AsmVerticalNavigationPosition = 'left' | 'right';
