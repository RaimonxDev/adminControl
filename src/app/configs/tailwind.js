/**
 * Generate spacing object
 */
const spacing = (() =>
{
    // Create the object and add some values by hand
    const obj = {
        px  : '1px',
        '0' : '0',
        '4' : '4px',
        '8' : '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px'
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
                'min': '0',
                'max': '599px'
            },
            'sm'   : {
                'min': '600px',
                'max': '959px'
            },
            'md'   : {
                'min': '960px',
                'max': '1279px'
            },
            'lg'   : {
                'min': '1280px',
                'max': '1919px'
            },
            'xl'   : {
                'min': '1920px'
            },
            'lt-sm': {
                'max': '599px'
            },
            'lt-md': {
                'max': '959px'
            },
            'lt-lg': {
                'max': '1279px'
            },
            'lt-xl': {
                'max': '1919px'
            },
            'gt-xs': {
                'min': '600px'
            },
            'gt-sm': {
                'min': '960px'
            },
            'gt-md': {
                'min': '1280px'
            },
            'gt-lg': {
                'min': '1920px'
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
            '7xl' : '48px'
        },

        // Border radius
        borderRadius: {
            default: '8px',
            'none' : '0',
            '4'    : '4px',
            '8'    : '8px',
            'full' : '9999px'
        },

        // Min width
        minWidth: {
            'auto'  : 'auto',
            'xs'    : '320px',
            'sm'    : '480px',
            'md'    : '600px',
            'lg'    : '800px',
            'xl'    : '960px',
            '2xl'   : '1120px',
            '3xl'   : '1280px',
            '4xl'   : '1440px',
            '5xl'   : '1600px',
            '6xl'   : '1920px',
            'full'  : '100%',
            'screen': '100vw',
            ...spacing
        },

        // Min height
        minHeight: {
            'auto'  : 'auto',
            'xs'    : '320px',
            'sm'    : '480px',
            'md'    : '600px',
            'lg'    : '800px',
            'xl'    : '960px',
            '2xl'   : '1120px',
            '3xl'   : '1280px',
            '4xl'   : '1440px',
            '5xl'   : '1600px',
            '6xl'   : '1920px',
            'full'  : '100%',
            'screen': '100vh',
            ...spacing
        },

        // Max width
        maxWidth: {
            'none'  : 'none',
            'xs'    : '320px',
            'sm'    : '480px',
            'md'    : '600px',
            'lg'    : '800px',
            'xl'    : '960px',
            '2xl'   : '1120px',
            '3xl'   : '1280px',
            '4xl'   : '1440px',
            '5xl'   : '1600px',
            '6xl'   : '1920px',
            'full'  : '100%',
            'screen': '100vw',
            ...spacing
        },

        // Max height
        maxHeight: {
            'none'  : 'none',
            'xs'    : '320px',
            'sm'    : '480px',
            'md'    : '600px',
            'lg'    : '800px',
            'xl'    : '960px',
            '2xl'   : '1120px',
            '3xl'   : '1280px',
            '4xl'   : '1440px',
            '5xl'   : '1600px',
            '6xl'   : '1920px',
            'full'  : '100%',
            'screen': '100vh',
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
            '0'  : '0',
            '12' : '0.12',
            '38' : '0.38',
            '54' : '0.54',
            '70' : '0.70',
            '84' : '0.84',
            '100': '1'
        }
    },

    // Variants
    variants: {
        cursor       : [],
        fontFamily   : [],
        fontWeight   : ['responsive'],
        resize       : [],
        fontSmoothing: []
    },

    // Core plugins
    corePlugins: {
        backgroundColor: false,
        borderColor    : false,
        boxShadow      : false,
        container      : false,
        float          : false,
        inset          : false,
        tableLayout    : false,
        textColor      : false
    },

    // Custom plugins
    plugins: []
};
