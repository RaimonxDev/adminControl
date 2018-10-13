export interface AsmConfig
{
    colorTheme: string;
    layout: {
        style: string,
        width: 'fullwidth' | 'boxed',
        navigation: {
            hidden: boolean,
            theme: {
                background: string,
                isDark: boolean
            }
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
