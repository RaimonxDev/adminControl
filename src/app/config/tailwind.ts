const {colors} = require('tailwindcss/defaultTheme');

/**
 * Generate spacing object
 */
const spacing = (() => {

    // Create the object and add some values by hand
    const obj = {
        '0'    : '0',
        '2'    : '2px',
        '4'    : '4px',
        '8'    : '8px',
        '12'   : '12px',
        '16'   : '16px',
        '20'   : '20px',
        '160'  : '160px',
        '200'  : '200px',
        '240'  : '240px',
        '256'  : '256px',
        '280'  : '280px',
        '320'  : '320px',
        '400'  : '400px',
        '480'  : '480px',
        '512'  : '512px',
        '560'  : '560px',
        '600'  : '600px',
        '640'  : '640px',
        '720'  : '720px',
        '800'  : '800px',
        '960'  : '960px',
        '1120' : '1120px',
        '1280' : '1280px',
        '1440' : '1440px',
        '1600' : '1600px',
        '1920' : '1920px',
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
        '1/6'  : '16.66667%',
        '2/6'  : '33.33333%',
        '3/6'  : '50%',
        '4/6'  : '66.66667%',
        '5/6'  : '83.33333%',
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
        '11/12': '91.66667%',
        'full' : '100%'
    };

    // Loop and add specified values to the object
    for ( let i = 24; i <= 128; i += 8 )
    {
        obj[i + ''] = i + 'px';
    }

    return obj;
})();

module.exports = {

    // Options
    important: true,

    // Theme
    theme: {

        // Spacing
        spacing,

        // Screens
        screens: {
            'xs'   : {
                min: '0',
                max: '599px'
            },
            'sm'   : {
                min: '600px',
                max: '959px'
            },
            'md'   : {
                min: '960px',
                max: '1279px'
            },
            'lg'   : {
                min: '1280px',
                max: '1919px'
            },
            'xl'   : {
                min: '1920px'
            },
            'lt-sm': {
                max: '599px'
            },
            'lt-md': {
                max: '959px'
            },
            'lt-lg': {
                max: '1279px'
            },
            'lt-xl': {
                max: '1919px'
            },
            'gt-xs': {
                min: '600px'
            },
            'gt-sm': {
                min: '960px'
            },
            'gt-md': {
                min: '1280px'
            },
            'gt-lg': {
                min: '1920px'
            }
        },

        // Font size
        fontSize: {
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

        // Border radius
        borderRadius: {
            default: '8px',
            none   : '0',
            4      : '4px',
            8      : '8px',
            full   : '9999px'
        },

        // Width
        width: {
            auto  : 'auto',
            screen: '100vw',
            ...spacing
        },

        // Height
        height: {
            auto  : 'auto',
            screen: '100vh',
            ...spacing
        },

        // Min width
        minWidth: {
            screen: '100vw',
            ...spacing
        },

        // Min height
        minHeight: {
            screen: '100vh',
            ...spacing
        },

        // Max width
        maxWidth: {
            none  : 'none',
            screen: '100vw',
            ...spacing
        },

        // Max height
        maxHeight: {
            none  : 'none',
            screen: '100vh',
            ...spacing
        },

        // zIndex
        zIndex: {
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

        // Opacity
        opacity: {
            0  : '0',
            12 : '0.12',
            38 : '0.38',
            54 : '0.54',
            70 : '0.70',
            84 : '0.84',
            100: '1'
        },

        // Contrasting colors for the default colors
        contrastColors: {
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
        backgroundColor: [],
        cursor         : [],
        fontFamily     : [],
        fontSmoothing  : [],
        fontWeight     : ['responsive'],
        resize         : [],
        textColor      : []
    },

    // Core plugins
    corePlugins: {
        container       : false,
        float           : false,
        tableLayout     : false,
        placeholderColor: false
    },

    // Custom plugins
    plugins: [

        // Component: Adds colors as CSS variables to the :root
        ({addComponents, theme}) => {

            const colorVars = {};

            Object.keys(theme('colors')).forEach(color => {

                if ( !!theme('colors.' + color) && theme('colors.' + color).constructor === Object )
                {
                    Object.keys(theme('colors.' + color)).forEach(hue => {
                        const hueLabel = hue === 'default' ? '' : '-' + hue;
                        const hueValue = hue === 'default' ? '.500' : '.' + hue;
                        colorVars['--color-' + color + hueLabel] = theme('colors.' + color + hueValue);
                    });
                }
                else
                {
                    colorVars['--color-' + color] = theme('colors.' + color);
                }
            });

            addComponents({
                ':root': {
                    ...colorVars
                }
            });
        },

        // Component: Adds color contrasts as CSS variables to the :root
        ({addComponents, theme}) => {

            const colorVars = {};

            Object.keys(theme('contrastColors')).forEach(color => {

                if ( !!theme('contrastColors.' + color) && theme('contrastColors.' + color).constructor === Object )
                {
                    Object.keys(theme('contrastColors.' + color)).forEach(hue => {
                        const hueLabel = hue === 'default' ? '' : '-' + hue;
                        const hueValue = hue === 'default' ? '.500' : '.' + hue;
                        colorVars['--contrast-' + color + hueLabel] = theme('contrastColors.' + color + hueValue);
                    });
                }
                else
                {
                    colorVars['--contrast-' + color] = theme('contrastColors.' + color);
                }
            });

            addComponents({
                ':root': {
                    ...colorVars
                }
            });
        },

        // Component: Adds a component that combines both background and its contrasting color
        // with modified utility classes such as 'text-secondary' or 'mat-icon'
        ({addComponents, theme}) => {

            const combinedColors = {};
            const generateCombinedColorRules = (color, hueLabel, hueValue) => {
                combinedColors['.' + color + hueLabel] = {
                    'backgroundColor'                                         : theme('colors.' + color + hueValue) + '!important',
                    'color'                                                   : theme('contrastColors.' + color + hueValue) + '!important',
                    '.mat-icon'                                               : {
                        color: theme('contrastColors.' + color + hueValue) + '!important'
                    },
                    '&.text-secondary, .text-secondary'                       : {
                        color: 'rgba(' + theme('contrastColors.' + color + hueValue) + ', 0.7) !important'
                    },
                    '&.text-hint, .text-hint, &.text-disabled, .text-disabled': {
                        color: 'rgba(' + theme('contrastColors.' + color + hueValue) + ', 0.38) !important'
                    },
                    '&.divider, .divider'                                     : {
                        color: 'rgba(' + theme('contrastColors.' + color + hueValue) + ', 0.12) !important'
                    }
                };
            };

            Object.keys(theme('colors')).forEach(color => {

                if ( !!theme('colors.' + color) && theme('colors.' + color).constructor === Object )
                {
                    Object.keys(theme('colors.' + color)).forEach(hue => {
                        const hueLabel = hue === 'default' ? '' : '-' + hue;
                        const hueValue = hue === 'default' ? '.500' : '.' + hue;
                        generateCombinedColorRules(color, hueLabel, hueValue);
                    });
                }
                else
                {
                    if ( color === 'transparent' )
                    {
                        return;
                    }

                    generateCombinedColorRules(color, '', '');
                }
            });

            addComponents(combinedColors);
        }
    ]
};
