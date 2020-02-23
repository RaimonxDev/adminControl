const forEach = require('lodash/forEach');
const isObject = require('lodash/isObject');
const {colors} = require('tailwindcss/defaultTheme');

module.exports = {

    // Options
    important: true,

    // Theme
    theme: {
        fontSize: {
            'xs'  : '0.625rem',
            'sm'  : '0.75rem',
            'md'  : '0.8125rem',
            'base': '0.875rem',
            'lg'  : '1rem',
            'xl'  : '1.125rem',
            '2xl' : '1.25rem',
            '3xl' : '1.5rem',
            '4xl' : '2rem',
            '5xl' : '2.25rem',
            '6xl' : '2.5rem',
            '7xl' : '3rem',
            '8xl' : '4rem',
            '9xl' : '6rem',
            '10xl': '8rem'
        },
        screens : {
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
        sizes   : theme => ({
            // Sizes are used in width & height helpers
            ...theme('spacing'),
            '50'   : '12.5rem',
            '60'   : '15rem',
            '80'   : '20rem',
            '90'   : '24rem',
            '100'  : '25rem',
            '120'  : '30rem',
            '128'  : '32rem',
            '140'  : '35rem',
            '160'  : '40rem',
            '180'  : '45rem',
            '192'  : '48rem',
            '200'  : '50rem',
            '240'  : '60rem',
            '256'  : '64rem',
            '280'  : '70rem',
            '320'  : '80rem',
            '360'  : '90rem',
            '400'  : '100rem',
            '480'  : '120rem',
            '1/2'  : '50%',
            '1/3'  : '33.33333%',
            '2/3'  : '66.66667%',
            '1/4'  : '25%',
            '2/4'  : '50%',
            '3/4'  : '75%',
            '1/5'  : '20%',
            '2/5'  : '40%',
            '3/5'  : '60%',
            '4/5'  : '80%',
            '1/12' : '8.33333%',
            '2/12' : '16.66667%',
            '3/12' : '25%',
            '4/12' : '33.33333%',
            '5/12' : '41.66667%',
            '6/12' : '50%',
            '7/12' : '58.33333%',
            '8/12' : '66.66667%',
            '9/12' : '75%',
            '10/12': '83.33333%',
            '11/12': '91.66667%'
        }),
        // Extending default configurations
        extend  : {
            colors    : theme => {
                // Extend the colors to add 'default' values that uses the hue 500.
                // This will generate utilities like 'text-indigo' or 'bg-red',
                // which will be defaulted to the hue 500 of that color palette.
                const defaultColors = colors;
                forEach(defaultColors, (value, key) => {
                    if ( isObject(value) )
                    {
                        defaultColors[key]['default'] = defaultColors[key]['500']
                    }
                });
                return defaultColors;
            },
            flex      : {
                '0': '0 0 auto'
            },
            fontFamily: {
                sans: [
                    'Inter',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    '"Noto Sans"',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"'
                ],
                mono: [
                    '"IBM Plex Mono"',
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    '"Liberation Mono"',
                    '"Courier New"',
                    'monospace'
                ]
            },
            opacity   : {
                12: '0.12',
                38: '0.38',
                54: '0.54',
                70: '0.70',
                84: '0.84'
            },
            rotate    : {
                '-270': '270deg',
                '15'  : '15deg',
                '30'  : '30deg',
                '60'  : '60deg',
                '270' : '270deg'
            },
            spacing   : {
                '2px': '2px',
                '14' : '3.5rem',
                '18' : '4.5rem',
                '22' : '5.5rem',
                '26' : '6.5rem',
                '28' : '7rem',
                '30' : '7.5rem'
            },
            zIndex    : {
                '-1'   : -1,
                '60'   : 60,
                '70'   : 70,
                '80'   : 80,
                '90'   : 90,
                '99'   : 99,
                '999'  : 999,
                '9999' : 9999,
                '99999': 99999
            },
            maxHeight : theme => ({
                none: 'none',
                ...theme('sizes')
            }),
            minHeight : theme => ({
                ...theme('sizes')
            }),
            height    : theme => ({
                ...theme('sizes')
            }),
            maxWidth  : theme => ({
                screen: '100vw',
                ...theme('sizes')
            }),
            minWidth  : theme => ({
                screen: '100vw',
                ...theme('sizes')
            }),
            width     : theme => ({
                ...theme('sizes')
            })
        }
    },

    // Variants
    variants: {
        backgroundColor         : ['dark-light'],
        borderColor             : ['dark-light'],
        borderWidth             : ['responsive', 'first', 'last'],
        cursor                  : [],
        fontFamily              : [],
        fontSmoothing           : [],
        fontWeight              : ['responsive'],
        iconSize                : ['responsive'],
        resize                  : [],
        textColor               : ['dark-light'],
        scale                   : [],
        rotate                  : [],
        translate               : [],
        skew                    : [],
        transitionProperty      : [],
        transitionTimingFunction: [],
        transitionDuration      : []
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
        require('./plugins/variants/export-font-family'),
        require('./plugins/variants/export-screens'),

        // Variants
        require('./plugins/variants/dark-light'),

        // Utilities
        require('./plugins/utilities/color-contrasts'),
        require('./plugins/utilities/color-combinations'),
        require('./plugins/utilities/icon-size'),
        require('./plugins/utilities/mirror')
    ]
};
