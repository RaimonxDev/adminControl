module.exports = (isProd) => ({
    experimental: {},
    future      : {},
    darkMode    : 'class',
    important   : true,
    purge       : {
        enabled: isProd,
        content: [
            '**/*.html',
            '**/*.ts'
        ],
        options: {
            safelist: {
                deep: [/^theme/, /^dark/, /^mat/]
            }
        }
    },
    theme       : {
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
            sm : '600px',
            md : '960px',
            lg : '1280px',
            xl : '1440px',
            xxl: '1920px'
        },
        extend  : {
            // Treo Tailwind plugin configuration
            treo: {

                /**
                 * Treo color themes with Angular Material Components support
                 * The 'default' theme is required for Treo to work correctly
                 */
                themes: {
                    'default': {
                        primary: ['indigo', 600],
                        accent : ['coolGray', 800],
                        warn   : ['red', 700]
                    },
                    'teal'   : {
                        primary: ['teal', 600],
                        accent : ['coolGray', 800],
                        warn   : ['red', 700]
                    },
                    'purple' : {
                        primary: ['purple', 600],
                        accent : ['coolGray', 800],
                        warn   : ['red', 700]
                    },
                    'orange' : {
                        primary: ['orange', 600],
                        accent : ['coolGray', 800],
                        warn   : ['red', 700]
                    }
                },

                /**
                 * By default, contrasting colors will be generated automatically by Treo
                 * Tailwind plugin based on palette colors but for some reason if you don't
                 * like them, you can use the below config to manually define contrasting
                 * colors for each palette
                 */
                /*
                contrasts: {
                    coolGray: {
                        '50'   : '#000000',
                        '100'  : '#000000',
                        '200'  : '#000000',
                        '300'  : '#000000',
                        '400'  : '#000000',
                        '500'  : '#000000',
                        DEFAULT: '#000000',
                        '600'  : '#000000',
                        '700'  : '#000000',
                        '800'  : '#000000',
                        '900'  : '#000000'
                    }
                },
                */

                /**
                 * Icon size object for extending Angular Material mat-icon
                 * compatible .icon-size-XX utility classes
                 */
                /*
                iconSize: {
                    8: '0.5rem'
                    10: '0.625rem',
                    12: '0.75rem'
                },
                */

                /**
                 * Separate spacing object to use in width/height utilities
                 * We don't want to add these to the existing 'spacing' config
                 * as it will result with bigger file as well as bunch of useless
                 * utilities such as p-1/3 or m-3/4
                 */
                spacing: {
                    // Fractional spacing values
                    '1/2'  : '50%',
                    '1/3'  : '33.333333%',
                    '2/3'  : '66.666667%',
                    '1/4'  : '25%',
                    '2/4'  : '50%',
                    '3/4'  : '75%',
                    '1/5'  : '20%',
                    '2/5'  : '40%',
                    '3/5'  : '60%',
                    '4/5'  : '80%',
                    '1/6'  : '16.666667%',
                    '2/6'  : '33.333333%',
                    '3/6'  : '50%',
                    '4/6'  : '66.666667%',
                    '5/6'  : '83.333333%',
                    '1/12' : '8.333333%',
                    '2/12' : '16.666667%',
                    '3/12' : '25%',
                    '4/12' : '33.333333%',
                    '5/12' : '41.666667%',
                    '6/12' : '50%',
                    '7/12' : '58.333333%',
                    '8/12' : '66.666667%',
                    '9/12' : '75%',
                    '10/12': '83.333333%',
                    '11/12': '91.666667%',

                    // Extended spacing values
                    '100': '25rem',
                    '120': '30rem',
                    '128': '32rem',
                    '140': '35rem',
                    '160': '40rem',
                    '180': '45rem',
                    '192': '48rem',
                    '200': '50rem',
                    '240': '60rem',
                    '256': '64rem',
                    '280': '70rem',
                    '320': '80rem',
                    '360': '90rem',
                    '400': '100rem',
                    '480': '120rem'
                }
            },

            // Tailwind config extensions
            flex      : {
                '0': '0 0 auto'
            },
            fontFamily: {
                sans: [
                    'Inter var',
                    'ui-sans-serif',
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
                    'ui-monospace',
                    'SFMono-Regular',
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
                87: '0.87'
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
                '13' : '3.25rem',
                '15' : '3.75rem',
                '18' : '4.5rem',
                '22' : '5.5rem',
                '26' : '6.5rem',
                '30' : '7.5rem',
                '50' : '12.5rem',
                '90' : '22.5rem'
            },
            height    : theme => ({
                ...theme('treo.spacing')
            }),
            minHeight : theme => ({
                ...theme('spacing'),
                ...theme('treo.spacing')
            }),
            maxHeight : theme => ({
                ...theme('treo.spacing'),
                none: 'none'
            }),
            width     : theme => ({
                ...theme('treo.spacing')
            }),
            minWidth  : theme => ({
                ...theme('spacing'),
                ...theme('treo.spacing'),
                screen: '100vw'
            }),
            maxWidth  : theme => ({
                ...theme('spacing'),
                ...theme('treo.spacing'),
                screen: '100vw'
            }),
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
            }
        }
    },
    variants    : {
        accessibility           : [],
        animation               : [],
        backgroundAttachment    : [],
        backgroundClip          : [],
        backgroundColor         : ['dark', 'group-hover', 'hover', 'focus'],
        backgroundImage         : [],
        backgroundOpacity       : ['dark', 'hover'],
        backgroundPosition      : [],
        backgroundRepeat        : [],
        backgroundSize          : [],
        borderCollapse          : [],
        borderColor             : ['dark', 'group-hover', 'hover', 'focus'],
        borderOpacity           : ['group-hover', 'hover', 'focus'],
        borderStyle             : [],
        borderWidth             : ['first', 'last', 'odd', 'even'],
        boxShadow               : ['responsive', 'hover', 'focus'],
        boxSizing               : [],
        cursor                  : [],
        divideColor             : ['dark'],
        divideOpacity           : [],
        divideStyle             : [],
        divideWidth             : [],
        fill                    : [],
        fontFamily              : [],
        outline                 : [],
        resize                  : [],
        ringColor               : ['responsive', 'dark'],
        ringOffsetColor         : ['responsive', 'dark'],
        ringOffsetWidth         : ['responsive'],
        ringOpacity             : ['responsive'],
        rotate                  : [],
        scale                   : [],
        skew                    : [],
        textColor               : ['dark', 'group-hover', 'hover', 'focus'],
        textOpacity             : ['group-hover', 'hover', 'focus'],
        transform               : [],
        transformOrigin         : [],
        transitionDelay         : [],
        transitionDuration      : [],
        transitionProperty      : [],
        transitionTimingFunction: [],
        translate               : ['hover', 'focus'],
        zIndex                  : ['responsive', 'focus']
    },
    corePlugins : {
        appearance        : false,
        gradientColorStops: false,
        container         : false,
        float             : false,
        clear             : false,
        placeholderColor  : false,
        placeholderOpacity: false,
        verticalAlign     : false
    },
    plugins     : [

        // Treo Tailwind plugin
        require('./src/@treo/tailwind/plugins/treo')

        // Other third party and/or custom plugins can be required here
        // ...
    ]
});
