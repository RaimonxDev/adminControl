const {colors} = require('tailwindcss/defaultTheme');
const {exportBoxShadow, exportColors, exportScreens, themeDarkVariant, themeLightVariant} = require('./plugins/variants');
const {colorCombinationsUtilities, colorContrastsUtilities, iconSizeUtilities, mirrorUtilities, rotateUtilities} = require('./plugins/utilities');
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
        borderRadius: {
            default: '8px',
            none   : '0',
            4      : '4px',
            8      : '8px',
            full   : '9999px'
        },
        width       : {
            auto  : 'auto',
            screen: '100vw',
            ...utils.sizes()
        },
        height      : {
            auto  : 'auto',
            screen: '100vh',
            ...utils.sizes()
        },
        minWidth    : {
            screen: '100vw',
            ...utils.sizes()
        },
        minHeight   : {
            screen: '100vh',
            ...utils.sizes()
        },
        maxWidth    : {
            none  : 'none',
            screen: '100vw',
            ...utils.sizes()
        },
        maxHeight   : {
            none  : 'none',
            screen: '100vh',
            ...utils.sizes()
        },
        zIndex      : {
            'auto' : 'auto',
            '-1'   : -1,
            '0'    : 0,
            '10'   : 10,
            '20'   : 20,
            '30'   : 30,
            '40'   : 40,
            '50'   : 50,
            '60'   : 60,
            '70'   : 70,
            '80'   : 80,
            '90'   : 90,
            '99'   : 99,
            '999'  : 999,
            '9999' : 9999,
            '99999': 99999
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

        // CUSTOM UTILITIES

        // Contrasting colors for the default colors
        colorContrasts: {
            black : colors.white,
            white : colors.gray['800'],
            gray  : {
                100    : colors.gray['900'],
                200    : colors.gray['900'],
                300    : colors.gray['900'],
                400    : colors.gray['900'],
                500    : colors.gray['900'],
                600    : colors.gray['100'],
                700    : colors.gray['100'],
                800    : colors.gray['100'],
                900    : colors.gray['100'],
                default: colors.gray['900']
            },
            red   : {
                100    : colors.red['900'],
                200    : colors.red['900'],
                300    : colors.red['900'],
                400    : colors.red['900'],
                500    : colors.red['900'],
                600    : colors.red['100'],
                700    : colors.red['100'],
                800    : colors.red['100'],
                900    : colors.red['100'],
                default: colors.red['900']
            },
            orange: {
                100    : colors.orange['900'],
                200    : colors.orange['900'],
                300    : colors.orange['900'],
                400    : colors.orange['900'],
                500    : colors.orange['900'],
                600    : colors.orange['100'],
                700    : colors.orange['100'],
                800    : colors.orange['100'],
                900    : colors.orange['100'],
                default: colors.orange['900']
            },
            yellow: {
                100    : colors.yellow['900'],
                200    : colors.yellow['900'],
                300    : colors.yellow['900'],
                400    : colors.yellow['900'],
                500    : colors.yellow['900'],
                600    : colors.yellow['100'],
                700    : colors.yellow['100'],
                800    : colors.yellow['100'],
                900    : colors.yellow['100'],
                default: colors.yellow['900']
            },
            green : {
                100    : colors.green['900'],
                200    : colors.green['900'],
                300    : colors.green['900'],
                400    : colors.green['900'],
                500    : colors.green['100'],
                600    : colors.green['100'],
                700    : colors.green['100'],
                800    : colors.green['100'],
                900    : colors.green['100'],
                default: colors.green['100']
            },
            teal  : {
                100    : colors.teal['900'],
                200    : colors.teal['900'],
                300    : colors.teal['900'],
                400    : colors.teal['900'],
                500    : colors.teal['100'],
                600    : colors.teal['100'],
                700    : colors.teal['100'],
                800    : colors.teal['100'],
                900    : colors.teal['100'],
                default: colors.teal['100']
            },
            blue  : {
                100    : colors.blue['900'],
                200    : colors.blue['900'],
                300    : colors.blue['900'],
                400    : colors.blue['900'],
                500    : colors.blue['100'],
                600    : colors.blue['100'],
                700    : colors.blue['100'],
                800    : colors.blue['100'],
                900    : colors.blue['100'],
                default: colors.blue['100']
            },
            indigo: {
                100    : colors.indigo['900'],
                200    : colors.indigo['900'],
                300    : colors.indigo['900'],
                400    : colors.indigo['900'],
                500    : colors.indigo['100'],
                600    : colors.indigo['100'],
                700    : colors.indigo['100'],
                800    : colors.indigo['100'],
                900    : colors.indigo['100'],
                default: colors.indigo['100']
            },
            purple: {
                100    : colors.purple['900'],
                200    : colors.purple['900'],
                300    : colors.purple['900'],
                400    : colors.purple['900'],
                500    : colors.purple['100'],
                600    : colors.purple['100'],
                700    : colors.purple['100'],
                800    : colors.purple['100'],
                900    : colors.purple['100'],
                default: colors.purple['100']
            },
            pink  : {
                100    : colors.pink['900'],
                200    : colors.pink['900'],
                300    : colors.pink['900'],
                400    : colors.pink['900'],
                500    : colors.pink['100'],
                600    : colors.pink['100'],
                700    : colors.pink['100'],
                800    : colors.pink['100'],
                900    : colors.pink['100'],
                default: colors.pink['100']
            }
        },

        // Rotate utilities
        rotate: {
            15 : '15deg',
            30 : '30deg',
            45 : '45deg',
            60 : '60deg',
            90 : '90deg',
            180: '180deg',
            270: '270deg'
        },

        // .icon-size-... utilities for sizing .mat-icon
        iconSize: {
            12: '12px',
            14: '14px',
            16: '16px',
            18: '18px',
            20: '20px',
            24: '24px',
            32: '32px',
            40: '40px',
            48: '48px',
            56: '56px',
            64: '64px',
            72: '72px',
            80: '80px',
            88: '88px',
            96: '96px'
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
            }
        }
    },

    // Variants
    variants: {
        backgroundColor  : ['dark', 'light'],
        borderColor      : ['dark', 'light'],
        borderWidth      : ['responsive', 'first', 'last'],
        colorCombinations: ['dark', 'light'],
        cursor           : [],
        fontFamily       : [],
        fontSmoothing    : [],
        fontWeight       : ['responsive'],
        iconSize         : ['responsive'],
        resize           : [],
        textColor        : ['dark', 'light']
    },

    // Core plugins
    corePlugins: {
        container       : false,
        float           : false,
        placeholderColor: false
    },

    // Custom plugins
    plugins: [

        // Exporter variants
        exportBoxShadow(),
        exportColors(),
        exportScreens(),

        // Variants
        themeDarkVariant(),
        themeLightVariant(),

        // Utilities
        colorCombinationsUtilities(),
        colorContrastsUtilities(),
        iconSizeUtilities(),
        mirrorUtilities(),
        rotateUtilities()
    ]
};
