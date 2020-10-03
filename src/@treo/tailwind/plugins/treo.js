const plugin = require('tailwindcss/plugin');
const colorLib = require('color');
const _ = require('lodash');

// -----------------------------------------------------------------------------------------------------
// @ Global variables for filling the config object from the plugin
// -----------------------------------------------------------------------------------------------------
const _allContrasts = {
    current    : null,
    transparent: null,
    white      : '#000000',
    black      : '#FFFFFF'
};
const _materialPalettes = {};

// -----------------------------------------------------------------------------------------------------
// @ TREO TailwindCSS Main Plugin
// -----------------------------------------------------------------------------------------------------
module.exports = plugin(({addVariant, variants, theme, e, postcss}) =>
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Generate color contrasts and Angular Material compatible palettes
        // -----------------------------------------------------------------------------------------------------
        Object.entries(theme('colors'))
            .filter(([key, value]) => _.isObject(value))
            .forEach(([key, colors]) =>
            {
                // If the contrast map for this color is provided by the user,
                // use it. Otherwise create it from palette itself.
                let contrasts = theme('treo.contrasts.' + key);
                if ( !contrasts )
                {
                    contrasts = {};

                    // Sort the palette colors from lighter to darker to
                    // get the lightest and darkest colors as Color so
                    // we can compare them.
                    const sortedColors = Object.values(colors).sort((a, b) => colorLib(b).luminosity() - colorLib(a).luminosity());
                    const lightestColor = colorLib(sortedColors[0]);
                    const darkestColor = colorLib(sortedColors[sortedColors.length - 1]);

                    // Go through the palette and generate the contrasting colors
                    // by comparing the lightest and darkest colors from the palette
                    // against the current color and choosing the one with better
                    // contrasts.
                    Object.entries(colors).forEach(([hue, color]) =>
                    {
                        contrasts[hue] = colorLib(color).contrast(lightestColor) > colorLib(color).contrast(darkestColor) ? lightestColor.hex() : darkestColor.hex();
                    });
                }

                // Merge colors and contrasts in _materialPalettes
                _materialPalettes[key] = colors;
                _materialPalettes[key].contrast = contrasts;

                // Merge contrasts in _allContrasts
                _allContrasts[key] = contrasts;
            });


        // -----------------------------------------------------------------------------------------------------
        // @ Variant for Angular Material Themes
        // -----------------------------------------------------------------------------------------------------
        addVariant('treo-angular-material-themes', ({container}) =>
        {
            console.dir('USER PROVIDED CONTRASTS');
            console.dir(theme('treo.contrasts'));
            console.dir('--------------------------------------------------');
            console.dir('ALL CALCULATED CONTRASTS');
            console.dir(theme('treo._allContrasts'));
            console.dir('--------------------------------------------------');
            console.dir('MATERIAL PALETTES');
            console.dir(theme('treo._materialPalettes'));

            // -----------------------------------------------------------------------------------------------------
            // @ Generate SCSS map of Material palettes and append it
            // -----------------------------------------------------------------------------------------------------
            // Prepare the map
            let map = '';

            // Iterate through Material palettes
            Object.entries(theme('treo._materialPalettes'))
                .forEach(([name, palette]) =>
                {
                    // Prepare contrasts and hues
                    let contrasts = '';
                    let hues = '';

                    // Iterate through the palette colors
                    Object.entries(palette)
                        .filter(([hue, color]) => hue !== 'default')
                        .forEach(([hue, color]) =>
                        {
                            // If the item is the contrast map...
                            if ( hue === 'contrast' )
                            {
                                Object.entries(color)
                                    .filter(([hue, color]) => hue !== 'default')
                                    .forEach(([hue, color]) =>
                                    {
                                        contrasts = `${contrasts} ${hue}: ${color},\n`;
                                    });
                            }
                            else
                            {
                                hues = `${hues} ${hue}: ${color},\n`;
                            }

                        });

                    // Generate the map
                    map = `${map} '${name}': (\n ${hues} contrast: (\n ${contrasts} )\n),\n`;
                });

            // Append the map into the container
            container.append(
                postcss.decl({
                    prop : '$treo-material-palettes',
                    value: `(\n ${map} ) !default`
                })
            );
        });


        // Go through all available colors from 'theme.colors' and

        // const ratio1 = wcagContrast.hex('rgba(0,0,0,0.12)', theme('colors.red.50'));
        // const ratio2 = wcagContrast.hex(theme('colors.red.500'), theme('colors.red.900'));

        // console.log(ratio1);
        // console.log(ratio2);

        /*addVariant('treo-angular-material-themes', ({container}) =>
        {
            container.append(
                `$customTheme: treo-light-theme(treo-palette('teal'), treo-palette('pink', 500), treo-palette('red', 400));

                .treo-theme-teal {
                    @include angular-material-theme($customTheme);

                    @include treo-color-classes(
                        (
                            primary: map-get($customTheme, primary),
                            accent: map-get($customTheme, accent),
                            warn: map-get($customTheme, warn)
                        )
                    );
                }
                `
            );
        });*/
    },
    {
        dark       : 'class',
        purge      : false,
        important  : true,
        theme      : {
            treo    : {
                contrasts: {},
                themes   : {},
                _allContrasts,
                _materialPalettes
            },
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
                    max: '1439px'
                },
                // XLarge
                'xl'   : {
                    min: '1440px'
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
                    max: '1439px'
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
                }
            },
            extend  : {
                boxShadow : {
                    solid: '0 0 0 2px currentColor'
                },
                flex      : {
                    '0': '0 0 auto'
                },
                fontFamily: {
                    sans: [
                        'Inter var',
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
                    '18' : '4.5rem',
                    '22' : '5.5rem',
                    '26' : '6.5rem',
                    '30' : '7.5rem',
                    '50' : '12.5rem',
                    '90' : '24rem',
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
                minHeight : theme => ({
                    ...theme('spacing')
                }),
                maxHeight : {
                    none: 'none'
                },
                minWidth  : theme => ({
                    screen: '100vw',
                    ...theme('spacing')
                }),
                maxWidth  : theme => ({
                    screen: '100vw',
                    ...theme('spacing')
                })
            }
        },
        variants   : {
            // Custom
            treo    : [],
            iconSize: ['responsive'],

            // Defaults
            accessibility           : ['responsive', 'focus'],
            alignContent            : ['responsive'],
            alignItems              : ['responsive'],
            alignSelf               : ['responsive'],
            backgroundAttachment    : [],
            backgroundClip          : [],
            backgroundColor         : ['dark-light'],
            backgroundImage         : [],
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
            transitionDelay         : []
        },
        // Core plugins
        corePlugins: {
            animation         : false,
            appearance        : false,
            gradientColorStops: false,
            container         : false,
            clear             : false,
            float             : false,
            placeholderColor  : false,
            placeholderOpacity: false,
            verticalAlign     : false
        }
    }
);
