import { AssemblyConfig } from '@assembly/types';

/**
 * Default Assembly Configuration
 *
 * You can edit the below object to change the default configuration. 'layout' configuration
 * can also be changed per component basis. See `...`
 * constructor method to learn more about changing them per component basis.
 */

export const assemblyConfig: AssemblyConfig = {

    // Color themes can be defined in 'src/app/app.theme.scss'
    colorTheme: 'theme-default',

    // Each layout style has its own set of options. After changing the
    // layout, make sure to have correct set of layout options otherwise
    // Assembly will throw errors and won't run correctly.
    layout: {
        style     : 'classic',
        width     : 'fullwidth',
        navigation: {
            background: 'asm-navy',
            hidden    : false
        },
        header    : {
            background: 'asm-white',
            hidden    : false,
            fixed     : false
        },
        footer    : {
            background: 'asm-navy-900',
            hidden    : false,
            fixed     : false
        }
    }
};
