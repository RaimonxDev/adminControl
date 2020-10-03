const forEach = require('lodash/forEach');
const isObject = require('lodash/isObject');
const {colors} = require('tailwindcss/defaultTheme');

module.exports = {

    // Experimental
    experimental: {
        applyComplexClasses : true,
        extendedSpacingScale: true
    },

    // Future
    future: {
        removeDeprecatedGapUtilities: true
    },

    // PurgeCSS
    purge: false,

    // Options
    important: true,

    // Theme
    theme: {
        colors: {
            current    : 'currentColor',
            transparent: 'transparent',
            white      : '#FFFFFF',
            black      : '#000000',
            gray       : {
                '50'   : '#F9FAFB',
                '100'  : '#F4F5F7',
                '200'  : '#E5E7EB',
                '300'  : '#D2D6DC',
                '400'  : '#9FA6B2',
                '500'  : '#6B7280',
                default: '#6B7280',
                '600'  : '#4B5563',
                '700'  : '#374151',
                '800'  : '#252F3F',
                '900'  : '#161E2E'
            },
            'cool-gray': {
                '50'   : '#FBFDFE',
                '100'  : '#F1F5F9',
                '200'  : '#E2E8F0',
                '300'  : '#CFD8E3',
                '400'  : '#97A6BA',
                '500'  : '#64748B',
                default: '#64748B',
                '600'  : '#475569',
                '700'  : '#364152',
                '800'  : '#27303F',
                '900'  : '#1A202E'
            },
            red        : {
                '50'   : '#FDF2F2',
                '100'  : '#FDE8E8',
                '200'  : '#FBD5D5',
                '300'  : '#F8B4B4',
                '400'  : '#F98080',
                '500'  : '#F05252',
                default: '#F05252',
                '600'  : '#E02424',
                '700'  : '#C81E1E',
                '800'  : '#9B1C1C',
                '900'  : '#771D1D'
            },
            orange     : {
                '50'   : '#FFF8F1',
                '100'  : '#FEECDC',
                '200'  : '#FCD9BD',
                '300'  : '#FDBA8C',
                '400'  : '#FF8A4C',
                '500'  : '#FF5A1F',
                default: '#FF5A1F',
                '600'  : '#D03801',
                '700'  : '#B43403',
                '800'  : '#8A2C0D',
                '900'  : '#771D1D'
            },
            yellow     : {
                '50'   : '#FDFDEA',
                '100'  : '#FDF6B2',
                '200'  : '#FCE96A',
                '300'  : '#FACA15',
                '400'  : '#E3A008',
                '500'  : '#C27803',
                default: '#C27803',
                '600'  : '#9F580A',
                '700'  : '#8E4B10',
                '800'  : '#723B13',
                '900'  : '#633112'
            },
            green      : {
                '50'   : '#F3FAF7',
                '100'  : '#DEF7EC',
                '200'  : '#BCF0DA',
                '300'  : '#84E1BC',
                '400'  : '#31C48D',
                '500'  : '#0E9F6E',
                default: '#0E9F6E',
                '600'  : '#057A55',
                '700'  : '#046C4E',
                '800'  : '#03543F',
                '900'  : '#014737'
            },
            teal       : {
                '50'   : '#EDFAFA',
                '100'  : '#D5F5F6',
                '200'  : '#AFECEF',
                '300'  : '#7EDCE2',
                '400'  : '#16BDCA',
                '500'  : '#0694A2',
                default: '#0694A2',
                '600'  : '#047481',
                '700'  : '#036672',
                '800'  : '#05505C',
                '900'  : '#014451'
            },
            blue       : {
                '50'   : '#EBF5FF',
                '100'  : '#E1EFFE',
                '200'  : '#C3DDFD',
                '300'  : '#A4CAFE',
                '400'  : '#76A9FA',
                '500'  : '#3F83F8',
                default: '#3F83F8',
                '600'  : '#1C64F2',
                '700'  : '#1A56DB',
                '800'  : '#1E429F',
                '900'  : '#233876'
            },
            indigo     : {
                '50'   : '#F0F5FF',
                '100'  : '#E5EDFF',
                '200'  : '#CDDBFE',
                '300'  : '#B4C6FC',
                '400'  : '#8DA2FB',
                '500'  : '#6875F5',
                default: '#6875F5',
                '600'  : '#5850EC',
                '700'  : '#5145CD',
                '800'  : '#42389D',
                '900'  : '#362F78'
            },
            purple     : {
                '50'   : '#F6F5FF',
                '100'  : '#EDEBFE',
                '200'  : '#DCD7FE',
                '300'  : '#CABFFD',
                '400'  : '#AC94FA',
                '500'  : '#9061F9',
                default: '#9061F9',
                '600'  : '#7E3AF2',
                '700'  : '#6C2BD9',
                '800'  : '#5521B5',
                '900'  : '#4A1D96'
            },
            pink       : {
                '50'   : '#FDF2F8',
                '100'  : '#FCE8F3',
                '200'  : '#FAD1E8',
                '300'  : '#F8B4D9',
                '400'  : '#F17EB8',
                '500'  : '#E74694',
                default: '#E74694',
                '600'  : '#D61F69',
                '700'  : '#BF125D',
                '800'  : '#99154B',
                '900'  : '#751A3D'
            }
        },
        extend: {

            // Treo Tailwind plugin configuration
            treo: theme => ({
                contrasts: {
                    gray: {
                        '50'   : '#000000',
                        '100'  : '#000000',
                        '200'  : '#000000',
                        '300'  : '#000000',
                        '400'  : '#000000',
                        '500'  : '#000000',
                        default: '#000000',
                        '600'  : '#000000',
                        '700'  : '#000000',
                        '800'  : '#000000',
                        '900'  : '#000000'
                    }
                },
                themes   : {
                    'treo-theme-dark' : {
                        scheme : 'dark',
                        primary: ['teal', 500],
                        accent : ['pink', 500],
                        warn   : ['red', 400]
                    },
                    'treo-theme-light': {
                        scheme : 'light',
                        primary: ['indigo', 600],
                        accent : ['cool-gray', 800],
                        warn   : ['red', 700]
                    },
                    // Teal color theme (Dark)
                    teal              : {
                        scheme : 'dark',
                        primary: ['teal', 500],
                        accent : ['pink', 500],
                        warn   : ['red', 400]
                    },
                    // Indigo color theme (Light)
                    indigo            : {
                        scheme : 'light',
                        primary: ['indigo', 600],
                        accent : ['cool-gray', 800],
                        warn   : ['red', 700]
                    }
                }
            })
            /*
            // Once TailwindCSS adds the above colors to their default config,
            // this code will be used for generating the default colors
            // and the theme.colors object will be removed from above
            colors: theme =>
            {
                const defaultColors = colors;

                // Add 'cool-gray' palette
                defaultColors['cool-gray'] = {
                    '50' : '#FBFDFE',
                    '100': '#F1F5F9',
                    '200': '#E2E8F0',
                    '300': '#CFD8E3',
                    '400': '#97A6BA',
                    '500': '#64748B',
                    '600': '#475569',
                    '700': '#364152',
                    '800': '#27303F',
                    '900': '#1A202E'
                };

                // Extend the colors to add 'default' values that uses the hue 500.
                // This will generate utilities like 'text-indigo' or 'bg-red',
                // which will be defaulted to the hue 500 of that color palette.
                forEach(defaultColors, (value, key) =>
                {
                    if ( isObject(value) )
                    {
                        defaultColors[key]['default'] = defaultColors[key]['500'];
                    }
                });

                // Return the colors
                return defaultColors;
            },
            */

            /*
            // Use this map to define custom contrasting colors for the custom colors
            colorContrasts: theme => ({
                brand-color: {
                    50     : theme('colors.brand-color.900'), // Use the 900 from the 'brand-color' palette as the contrasting color of the 50
                    100    : theme('colors.brand-color.900'),
                    200    : theme('colors.brand-color.900'),
                    300    : theme('colors.brand-color.900'),
                    400    : theme('colors.brand-color.900'),
                    500    : theme('colors.brand-color.900'),
                    600    : theme('colors.brand-color.50'),
                    700    : theme('colors.brand-color.50'),
                    800    : theme('colors.brand-color.50'),
                    900    : theme('colors.brand-color.50'),
                    default: theme('colors.brand-color.900')
                }
            },
            */

            /*
            // Use this map to extend the iconSize utility sizes
            iconSize: {
                8: '8px',
                10: '10px'
            },
            */
        }
    },

    // Variants
    variants: {
        accessibility           : ['responsive', 'focus'],
        alignContent            : ['responsive'],
        alignItems              : ['responsive'],
        alignSelf               : ['responsive'],
        backgroundAttachment    : [],
        backgroundClip          : [],
        backgroundColor         : ['dark-light'],
        backgroundImage         : [],
        gradientColorStops      : [],
        backgroundOpacity       : [],
        backgroundPosition      : [],
        backgroundRepeat        : [],
        backgroundSize          : [],
        borderCollapse          : [],
        borderColor             : ['dark-light'],
        borderOpacity           : [],
        borderRadius            : ['responsive'],
        borderStyle             : [],
        borderWidth             : ['responsive', 'first', 'last'],
        boxShadow               : [],
        boxSizing               : [],
        cursor                  : [],
        display                 : ['responsive'],
        divideColor             : [],
        divideOpacity           : [],
        divideStyle             : [],
        divideWidth             : [],
        fill                    : [],
        flex                    : ['responsive'],
        flexDirection           : ['responsive'],
        flexGrow                : ['responsive'],
        flexShrink              : ['responsive'],
        flexWrap                : ['responsive'],
        fontFamily              : [],
        fontSize                : ['responsive'],
        fontSmoothing           : [],
        fontStyle               : [],
        fontWeight              : ['responsive'],
        height                  : ['responsive'],
        inset                   : ['responsive'],
        justifyContent          : ['responsive'],
        letterSpacing           : ['responsive'],
        lineHeight              : ['responsive'],
        listStylePosition       : [],
        listStyleType           : [],
        margin                  : ['responsive'],
        maxHeight               : ['responsive'],
        maxWidth                : ['responsive'],
        minHeight               : ['responsive'],
        minWidth                : ['responsive'],
        objectFit               : ['responsive'],
        objectPosition          : ['responsive'],
        opacity                 : ['responsive', 'hover', 'focus'],
        order                   : ['responsive'],
        outline                 : ['focus'],
        overflow                : ['responsive'],
        overscrollBehavior      : ['responsive'],
        padding                 : ['responsive'],
        placeholderOpacity      : ['focus'],
        pointerEvents           : [],
        position                : ['responsive'],
        resize                  : [],
        space                   : ['responsive'],
        stroke                  : [],
        strokeWidth             : [],
        tableLayout             : [],
        textAlign               : ['responsive'],
        textColor               : ['dark-light'],
        textOpacity             : [],
        textDecoration          : ['hover', 'focus'],
        textTransform           : [],
        userSelect              : [],
        visibility              : ['responsive'],
        whitespace              : ['responsive'],
        width                   : ['responsive'],
        wordBreak               : ['responsive'],
        zIndex                  : ['responsive'],
        gap                     : ['responsive'],
        gridAutoFlow            : ['responsive'],
        gridTemplateColumns     : ['responsive'],
        gridColumn              : ['responsive'],
        gridColumnStart         : ['responsive'],
        gridColumnEnd           : ['responsive'],
        gridTemplateRows        : ['responsive'],
        gridRow                 : ['responsive'],
        gridRowStart            : ['responsive'],
        gridRowEnd              : ['responsive'],
        transform               : ['responsive'],
        transformOrigin         : ['responsive'],
        scale                   : [],
        rotate                  : [],
        translate               : [],
        skew                    : [],
        transitionProperty      : [],
        transitionTimingFunction: [],
        transitionDuration      : [],
        transitionDelay         : [],
        animation               : [],

        // Custom
        iconSize: ['responsive']
    },

    // Core plugins
    corePlugins: {
        appearance      : false,
        container       : false,
        clear           : false,
        float           : false,
        placeholderColor: false,
        verticalAlign   : false
    },

    // Custom plugins
    plugins: [

        // Custom plugins required by Treo
        ...require('./src/@treo/tailwind/plugins')

        // Other third party and custom plugins can be required here
        // ...
    ]
};
