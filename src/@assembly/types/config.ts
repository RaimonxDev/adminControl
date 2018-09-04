export interface AssemblyConfig
{
    colorTheme: string;
    customScrollbars: boolean;
    layout: {
        style: string,
        width: 'fullwidth' | 'boxed',
        navigation: {
            primaryBackground: string,
            secondaryBackground: string,
            hidden: boolean,
            folded: boolean,
            variant: string
        },
        header: {
            customBackgroundColor: boolean,
            background: string,
            hidden: boolean,
            fixed: boolean
        }
        footer: {
            customBackgroundColor: boolean,
            background: string,
            hidden: boolean,
            fixed: boolean
        }
    };
}
