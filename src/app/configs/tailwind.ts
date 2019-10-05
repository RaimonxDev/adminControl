/**
 * Generate spacing object
 */
const spacing = (() => {

    // Create the object and add some values by hand
    const obj = {
        '0'    : '0',
        '4'    : '4px',
        '8'    : '8px',
        '12'   : '12px',
        '16'   : '16px',
        '20'   : '20px',
        '160'  : '160px',
        '240'  : '240px',
        '256'  : '256px',
        '320'  : '320px',
        '400'  : '400px',
        '480'  : '480px',
        '512'  : '512px',
        '600'  : '600px',
        '640'  : '640px',
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
            '7xl' : '48px'
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
