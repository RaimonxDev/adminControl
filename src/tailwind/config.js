const {colors} = require('tailwindcss/defaultTheme');
const utils = require('./utils');

module.exports = {

    // Options
    important: true,

    // Theme
    theme: {
        spacing     : {
            ...utils.spacing()
        },
        screens     : {
            // XSmall
            'xs'   : {
                min: '0',
                max: '599px'
            },
            // Small
            'sm'   : {
                min: '600px',
                max: '959px'
            },
            // Medium
            'md'   : {
                min: '960px',
                max: '1279px'
            },
            // Large
            'lg'   : {
                min: '1280px',
                max: '1919px'
            },
            // XLarge
            'xl'   : {
                min: '1920px'
            },
            // Less than Small
            'lt-sm': {
                max: '599px'
            },
            // Less than Medium
            'lt-md': {
                max: '959px'
            },
            // Less than Large
            'lt-lg': {
                max: '1279px'
            },
            // Less than XLarge
            'lt-xl': {
                max: '1919px'
            },
            // Greater than XSmall
            'gt-xs': {
                min: '600px'
            },
            // Greater than Small
            'gt-sm': {
                min: '960px'
            },
            // Greater than Medium
            'gt-md': {
                min: '1280px'
            },
            // Greater than Large
            'gt-lg': {
                min: '1920px'
            }
        },
        borderRadius: {
            none: '0',
            4   : '4px',
            8   : '8px',
            full: '9999px'
        },
        fontSize    : {
            'xs'  : '10px',
            'sm'  : '12px',
            'md'  : '13px',
            'base': '14px',
            'lg'  : '16px',
            'xl'  : '18px',
            '2xl' : '20px',
            '3xl' : '24px',
            '4xl' : '32px',
            '5xl' : '36px',
            '6xl' : '40px',
            '7xl' : '48px',
            '8xl' : '64px',
            '9xl' : '96px',
            '10xl': '128px'
        },
        height      : {
            auto  : 'auto',
            screen: '100vh',
            ...utils.sizes()
        },
        maxHeight   : {
            none  : 'none',
            screen: '100vh',
            ...utils.sizes()
        },
        maxWidth    : {
            none  : 'none',
            screen: '100vw',
            ...utils.sizes()
        },
        minHeight   : {
            screen: '100vh',
            ...utils.sizes()
        },
        minWidth    : {
            screen: '100vw',
            ...utils.sizes()
        },
        opacity     : {
            0  : '0',
            12 : '0.12',
            38 : '0.38',
            54 : '0.54',
            70 : '0.70',
            84 : '0.84',
            100: '1'
        },
        width       : {
            auto  : 'auto',
            screen: '100vw',
            ...utils.sizes()
        },

        // Extensions
        extend: {

            // Extend the colors to add 'default' values that uses the hue 500.
            // This will generate utilities like 'text-indigo' or 'bg-red',
            // which will be defaulted to the hue 500 of that color palette.
            colors: {
                gray  : {
                    ...colors.gray,
                    default: colors.gray['500']
                },
                red   : {
                    ...colors.red,
                    default: colors.red['500']
                },
                orange: {
                    ...colors.orange,
                    default: colors.orange['500']
                },
                yellow: {
                    ...colors.yellow,
                    default: colors.yellow['500']
                },
                green : {
                    ...colors.green,
                    default: colors.green['500']
                },
                teal  : {
                    ...colors.teal,
                    default: colors.teal['500']
                },
                blue  : {
                    ...colors.blue,
                    default: colors.blue['500']
                },
                indigo: {
                    ...colors.indigo,
                    default: colors.indigo['500']
                },
                purple: {
                    ...colors.purple,
                    default: colors.purple['500']
                },
                pink  : {
                    ...colors.pink,
                    default: colors.pink['500']
                }
            },

            rotate: {
                '-270': '270deg',
                '15'  : '15deg',
                '30'  : '30deg',
                '60'  : '60deg',
                '270' : '270deg'
            },

            zIndex: {
                '-1'   : -1,
                '60'   : 60,
                '70'   : 70,
                '80'   : 80,
                '90'   : 90,
                '99'   : 99,
                '999'  : 999,
                '9999' : 9999,
                '99999': 99999
            }
        }
    },

    // Variants
    variants: {
        backgroundColor         : ['dark', 'light'],
        borderColor             : ['dark', 'light'],
        borderWidth             : ['responsive', 'first', 'last'],
        cursor                  : [],
        fontFamily              : [],
        fontSmoothing           : [],
        fontWeight              : ['responsive'],
        iconSize                : ['responsive'],
        resize                  : [],
        textColor               : ['dark', 'light'],
        scale                   : [],
        rotate                  : [],
        translate               : [],
        skew                    : [],
        transitionProperty      : [],
        transitionTimingFunction: [],
        transitionDuration      : [],
        transitionDelay         : []
    },

    // Core plugins
    corePlugins: {
        container       : false,
        clear           : false,
        float           : false,
        placeholderColor: false
    },

    // Custom plugins
    plugins: [

        // Exporter variants
        require('./plugins/variants/export-box-shadow'),
        require('./plugins/variants/export-colors'),
        require('./plugins/variants/export-screens'),

        // Variants
        require('./plugins/variants/theme-dark'),
        require('./plugins/variants/theme-light'),

        // Utilities
        require('./plugins/utilities/color-contrasts'),
        require('./plugins/utilities/color-combinations'),
        require('./plugins/utilities/icon-size'),
        require('./plugins/utilities/mirror')
    ]
};
