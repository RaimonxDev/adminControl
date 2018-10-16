export interface AsmConfig
{
    colorTheme?: string;
    customScrollbars?: boolean;
    layout?: {
        style?: string,
        options?: {
            width?: 'fullwidth' | 'boxed',
            navigation?: {
                hidden?: boolean,
                theme?: {
                    background?: string,
                    isDark?: boolean
                }
            },
            header?: {
                background?: string,
                hidden?: boolean,
                fixed?: boolean
            }
            footer?: {
                background?: string,
                hidden?: boolean,
                fixed?: boolean
            }
        }
    };
}
