export interface AsmMenuItem
{
    id: string;
    title: string;
    type: 'item' | 'group' | 'collapsable';
    translate?: string;
    icon?: string;
    hidden?: boolean;
    url?: string;
    externalUrl?: string;
    exactMatch?: boolean;
    openInNewTab?: boolean;
    classes?: string;
    function?: any;
    badge?: {
        title?: string;
        translate?: string;
        bg?: string;
        fg?: string;
    };
    children?: AsmMenuItem[];
}

export interface AsmMenu extends AsmMenuItem
{
    children?: AsmMenuItem[];
}
