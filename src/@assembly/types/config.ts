export interface AssemblyConfig
{
    colorTheme: string;
    layout: {
        style: string,
        width: 'fullwidth' | 'boxed',
        navigation: {
            background: string,
            hidden: boolean
        },
        header: {
            background: string,
            hidden: boolean,
            fixed: boolean
        }
        footer: {
            background: string,
            hidden: boolean,
            fixed: boolean
        }
    };
}
