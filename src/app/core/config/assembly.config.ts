import { AssemblyConfig } from '@assembly/types';

/**
 * Default Assembly Configuration
 *
 * You can edit the below object to change the default configuration. 'layout' configuration
 * can also be changed per component basis. See `...`
 * constructor method to learn more about changing them per component basis.
 */

export const assemblyConfig: AssemblyConfig = {
    colorTheme      : 'theme-default', // Color themes can be defined in src/app/app.theme.scss
    customScrollbars: true,
    layout          : { // Each layout style has its own set of options and they can be seen in ...
        style     : 'vertical-layout-1',
        width     : 'fullwidth',
        navigation: {
            primaryBackground  : 'asm-navy-700',
            secondaryBackground: 'asm-navy-900',
            folded             : false,
            hidden             : false,
            variant            : 'vertical-style-1'
        },
        header    : {
            customBackgroundColor: false,
            background           : 'asm-white-500',
            hidden               : false,
            fixed                : false
        },
        footer    : {
            customBackgroundColor: true,
            background           : 'asm-navy-900',
            hidden               : false,
            fixed                : false
        }
    }
};
