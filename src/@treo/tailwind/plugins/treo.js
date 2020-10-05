const plugin = require('tailwindcss/plugin');
const colorLib = require('color');
const _ = require('lodash');

// -----------------------------------------------------------------------------------------------------
// @ Global variables for filling the config object from the plugin
// -----------------------------------------------------------------------------------------------------
const contrasts = {
    current    : null,
    transparent: null,
    white      : '#000000',
    black      : '#FFFFFF'
};
const materialPalettes = {};

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
                let colorContrasts = theme('treo.contrasts.' + key);
                if ( !colorContrasts )
                {
                    colorContrasts = {};

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
                        colorContrasts[hue] = colorLib(color).contrast(lightestColor) > colorLib(color).contrast(darkestColor) ? lightestColor.hex() : darkestColor.hex();
                    });
                }

                // Merge colors and contrasts in _materialPalettes
                materialPalettes[key] = colors;
                materialPalettes[key].contrast = colorContrasts;

                // Merge contrasts in _allContrasts
                contrasts[key] = colorContrasts;
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
            // @ Generate Angular Material compatible palettes map
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

            // -----------------------------------------------------------------------------------------------------
            // @ Generate Angular Material theme generator code
            // -----------------------------------------------------------------------------------------------------
            // Prepare the string
            let themeGenCode = '';

            // Iterate through themes
            Object.entries(theme('treo.themes'))
                .forEach(([name, theme]) =>
                {
                    // Generate modified foreground colors map for this theme
                    let foregroundMap = '';
                    Object.entries(theme('treo.material.colors.foreground.' + theme.scheme)).forEach(([name, color]) =>
                    {
                        foregroundMap = `${foregroundMap} ${name}:${color},\n`;
                    });

                    // Generate modified background colors map for this theme
                    let backgroundMap = '';
                    Object.entries(theme('treo.material.colors.background.' + theme.scheme)).forEach(([name, color]) =>
                    {
                        backgroundMap = `${backgroundMap} ${name}:${color},\n`;
                    });

                    // Generate the code for the theme
                    themeGenCode = `${themeGenCode}
                        
                        $angular-material-theme-for-${name}: ${theme.scheme === 'light' ? 'mat-light-theme' : 'mat-dark-theme'}
                        (
                            (
                                color: (
                                    primary: mat-palette(map-get($treo-material-palettes, ${theme.scheme.primary[0]}, ${theme.scheme.primary[1]}, 100, 700, ${theme.scheme.primary[1]})),
                                    accent: mat-palette(map-get($treo-material-palettes, ${theme.scheme.accent[0]}, ${theme.scheme.accent[1]}, 100, 700, ${theme.scheme.accent[1]})),
                                    warn: mat-palette(map-get($treo-material-palettes, ${theme.scheme.warn[0]}, ${theme.scheme.warn[1]}, 100, 700, ${theme.scheme.warn[1]}))
                                )
                            )
                        );
                        
                        $foreground-colors-for-${name}: (
                            ${foregroundMap}
                        );
                        
                        $background-colors-for-${name}: (
                            ${backgroundMap}
                        );
                        
                        .${name} {
                            
                        }
                    `;
                });

        });


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
                material : {
                    colors: {
                        foreground: {
                            light: {
                                'base'             : '#000000',
                                'divider'          : '#E2E8F0',
                                'dividers'         : '#E2E8F0',
                                'disabled'         : '#97A6BA',
                                'disabled-button'  : '#97A6BA',
                                'disabled-text'    : '#97A6BA',
                                'elevation'        : '#000000',
                                'hint-text'        : '#97A6BA',
                                'secondary-text'   : '#64748B',
                                'icon'             : '#64748B',
                                'icons'            : '#64748B',
                                'text'             : '#27303F',
                                'slider-min'       : '#27303F',
                                'slider-off'       : '#CFD8E3',
                                'slider-off-active': '#97A6BA'
                            },
                            dark : {
                                'base'             : '#FFFFFF',
                                'divider'          : 'rgba(#F1F5F9, 0.12)',
                                'dividers'         : 'rgba(#F1F5F9, 0.12)',
                                'disabled'         : '#475569',
                                'disabled-button'  : '#27303F',
                                'disabled-text'    : '#475569',
                                'elevation'        : '#000000',
                                'hint-text'        : '#64748B',
                                'secondary-text'   : '#97A6BA',
                                'icon'             : '#F1F5F9',
                                'icons'            : '#F1F5F9',
                                'text'             : '#FFFFFF',
                                'slider-min'       : '#FFFFFF',
                                'slider-off'       : '#64748B',
                                'slider-off-active': '#97A6BA'
                            }
                        },
                        background: {
                            light: {
                                'status-bar'              : '#CFD8E3',
                                'app-bar'                 : '#FFFFFF',
                                'background'              : '#F1F5F9',
                                'hover'                   : 'rgba(#97A6BA, 0.12)',
                                'card'                    : '#FFFFFF',
                                'dialog'                  : '#FFFFFF',
                                'disabled-button'         : 'rgba(#97A6BA, 0.38)',
                                'raised-button'           : '#FFFFFF',
                                'focused-button'          : '#64748B',
                                'selected-button'         : '#E2E8F0',
                                'selected-disabled-button': '#E2E8F0',
                                'disabled-button-toggle'  : '#CFD8E3',
                                'unselected-chip'         : '#E2E8F0',
                                'disabled-list-option'    : '#CFD8E3',
                                'tooltip'                 : '#27303F'
                            },
                            dark : {
                                'status-bar'              : '#1A202E',
                                'app-bar'                 : '#1A202E',
                                'background'              : '#1A202E',
                                'hover'                   : 'rgba(255, 255, 255, 0.05)',
                                'card'                    : '#27303F',
                                'dialog'                  : '#27303F',
                                'disabled-button'         : 'rgba(#1A202E, 0.38)',
                                'raised-button'           : '#1A202E',
                                'focused-button'          : '#E2E8F0',
                                'selected-button'         : 'rgba(255, 255, 255, 0.05)',
                                'selected-disabled-button': '#27303F',
                                'disabled-button-toggle'  : '#1A202E',
                                'unselected-chip'         : '#475569',
                                'disabled-list-option'    : '#E2E8F0',
                                'tooltip'                 : '#64748B'
                            }
                        }
                    }
                }
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
