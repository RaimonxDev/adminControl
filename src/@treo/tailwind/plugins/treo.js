const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;
const withAlphaVariable = require('tailwindcss/lib/util/withAlphaVariable').default;
const colorLib = require('color');
const _ = require('lodash');

// -----------------------------------------------------------------------------------------------------
// @ Global variables
// -----------------------------------------------------------------------------------------------------
const colorSchemes = ['light', 'dark'];
const contrasts = {
    white: '#000000',
    black: '#FFFFFF'
};
const materialPalettes = {};

// -----------------------------------------------------------------------------------------------------
// @ Global helpers
// -----------------------------------------------------------------------------------------------------

/**
 * Helper function to add DEFAULT to each default color palette so
 * we can do things like 'text-red' and 'bg-blue' without needing
 * to use a HUE value every time
 *
 * @param defaultHue
 * @returns {{}}
 */
const colorsWithDefaults = (defaultHue = '500') =>
{
    // Prepare the empty object
    const newColors = {};

    // Iterate through the default color palette objects and add a DEFAULT value
    Object.entries(colors)
        .filter(([key, value]) => _.isObject(value))
        .forEach(([name, palette]) =>
        {
            newColors[name] = {
                ...palette,
                DEFAULT: palette[defaultHue]
            };
        });

    return newColors;
};

// -----------------------------------------------------------------------------------------------------
// @ TREO TailwindCSS Main Plugin
// -----------------------------------------------------------------------------------------------------
module.exports = plugin(({addComponents, addUtilities, addVariant, corePlugins, e, postcss, theme, variants}) =>
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Helpers
        // -----------------------------------------------------------------------------------------------------

        // Helper function for getting opacity supported colors
        //
        // tailwindcss/src/plugins/textColor.js
        // tailwindcss/src/plugins/backgroundColor.js
        // tailwindcss/src/plugins/borderColor.js
        const withOpacity = (value, type = 'text', important = true) =>
        {
            let css;

            switch ( type )
            {
                case 'text' :
                {
                    if ( corePlugins('textOpacity') )
                    {
                        css = withAlphaVariable({
                            color   : value,
                            property: 'color',
                            variable: '--text-opacity'
                        });
                    }
                    else
                    {
                        css = {color: value};
                    }

                    break;
                }
                case 'bg' :
                {
                    if ( corePlugins('backgroundOpacity') )
                    {
                        css = withAlphaVariable({
                            color   : value,
                            property: 'background-color',
                            variable: '--bg-opacity'
                        });
                    }
                    else
                    {
                        css = {'background-color': value};
                    }

                    break;
                }
                case 'border':
                {
                    if ( corePlugins('borderOpacity') )
                    {
                        css = withAlphaVariable({
                            color   : value,
                            property: 'border-color',
                            variable: '--border-opacity'
                        });
                    }
                    else
                    {
                        css = {'border-color': value};
                    }

                    break;
                }
            }

            if ( important )
            {
                return _.fromPairs(_.map(css, (value, prop) => [prop, value + ' !important']));
            }

            return css;
        };

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
                materialPalettes[key] = _.clone(colors);
                materialPalettes[key].contrast = colorContrasts;

                // Merge contrasts in _allContrasts
                contrasts[key] = colorContrasts;
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Generate scheme specific utility classes
        // -----------------------------------------------------------------------------------------------------
        const schemeUtilities = _.map(colorSchemes, (colorScheme) =>
        {
            const isDark = colorScheme === 'dark';
            const dictionary = theme(`treo.customPropertyDictionary`);
            const background = theme(`treo.material.colors.background.${colorScheme}`);
            const foreground = theme(`treo.material.colors.foreground.${colorScheme}`);

            // Prepare the root utilities and utilities objects
            let rootUtilities = {};
            let utilities = {};

            // Generate and append custom properties as root utilities
            rootUtilities = {
                ..._.fromPairs(_.map(dictionary.background, (value, key) => [`--${e(key)}`, background[value]])),
                ..._.fromPairs(_.map(dictionary.foreground, (value, key) => [`--${e(key)}`, foreground[value]]))
            };

            // If this is a light scheme, add is-dark custom property
            // If a custom property is not available, browsers will use
            // the fallback value. In this case, since we use '--is-dark'
            // as the name of our custom property, we can use it like this:
            // background-color: var(--is-dark, red);
            //
            // Since we won't have '--is-dark' on dark themes, the above
            // syntax can be interpreted as; 'Apply red color if we are
            // using a dark theme!' which is easy to understand and remember.
            if ( !isDark )
            {
                rootUtilities = {
                    ...rootUtilities,
                    '--is-dark': 'false'
                };
            }

            // Generate and append main background and color as root utilities
            rootUtilities = {
                ...rootUtilities,
                ...withOpacity(foreground.text),
                ...withOpacity(background.background, 'bg')
            };

            // Generate base utility classes
            utilities = {
                '*, *::before, *::after'                      : withOpacity(foreground.divider, 'border', false),
                '[disabled] *'                                : withOpacity(foreground.disabled),
                '.mat-icon'                                   : (isDark ? withOpacity(foreground['secondary-text']) : withOpacity(foreground.icon)),
                '.text-card'                                  : withOpacity(background.card),
                '.text-default'                               : withOpacity(foreground.text),
                '.text-secondary'                             : withOpacity(foreground['secondary-text']),
                '.text-hint'                                  : withOpacity(foreground['hint-text']),
                '.text-disabled'                              : withOpacity(foreground['disabled-text']),
                '.divider'                                    : withOpacity(foreground.divider),
                '.bg-card'                                    : withOpacity(background.card, 'bg'),
                '.bg-default'                                 : withOpacity(background.background, 'bg'),
                '.bg-dialog'                                  : withOpacity(background.card, 'bg'),
                '.bg-hover'                                   : withOpacity(background.hover, 'bg'),
                [`.${e(`hover:bg-hover:hover`)}`]             : withOpacity(background.hover, 'bg'),
                [`.group .${e(`group-hover:bg-hover:hover`)}`]: withOpacity(background.hover, 'bg')
            };

            // Add dark variants
            if ( isDark )
            {
                utilities = {
                    ...utilities,
                    [`.${e(`dark:text-card`)}`]                        : withOpacity(background.card),
                    [`.${e(`dark:text-default`)}`]                     : withOpacity(foreground.text),
                    [`.${e(`dark:text-secondary`)}`]                   : withOpacity(foreground['secondary-text']),
                    [`.${e(`dark:text-hint`)}`]                        : withOpacity(foreground['hint-text']),
                    [`.${e(`dark:text-disabled`)}`]                    : withOpacity(foreground['disabled-text']),
                    [`.${e(`dark:divider`)}`]                          : withOpacity(foreground.divider),
                    [`.${e(`dark:bg-card`)}`]                          : withOpacity(background.card, 'bg'),
                    [`.${e(`dark:bg-default`)}`]                       : withOpacity(background.background, 'bg'),
                    [`.${e(`dark:bg-dialog`)}`]                        : withOpacity(background.card, 'bg'),
                    [`.${e(`dark:bg-hover`)}`]                         : withOpacity(background.hover, 'bg'),
                    [`.${e(`dark:hover:bg-hover:hover`)}`]             : withOpacity(background.hover, 'bg'),
                    [`.group .${e(`dark:group-hover:bg-hover:hover`)}`]: withOpacity(background.hover, 'bg')
                };
            }

            if ( !isDark )
            {
                return {
                    ':root': rootUtilities,
                    ...utilities,

                    // Allow overriding the dark theme using ".light" class
                    '.dark .light': {
                        ...rootUtilities,
                        ...utilities
                    }
                };
            }

            return {
                '.dark': {
                    ...rootUtilities,
                    ...utilities
                }
            };
        });

        addComponents(schemeUtilities);

        // -----------------------------------------------------------------------------------------------------
        // @ Generate theme specific utility classes
        // -----------------------------------------------------------------------------------------------------
        const themeUtilities = _.map(theme('treo.themes'), (themeConfig, name) =>
        {
            // Prepare the utilities and dark utilities object
            let utilities = {};
            let darkUtilities = {};

            // Prepare theme colors and contrasts using Tailwind's flattenColorPalette utility
            const themeColors = flattenColorPalette({
                primary: theme(`colors.${themeConfig.primary[0]}`),
                accent : theme(`colors.${themeConfig.accent[0]}`),
                warn   : theme(`colors.${themeConfig.warn[0]}`)
            });
            const themeColorContrasts = flattenColorPalette({
                primary: contrasts[themeConfig.primary[0]],
                accent : contrasts[themeConfig.accent[0]],
                warn   : contrasts[themeConfig.warn[0]]
            });

            // Override the default hues depending on the user's choice
            themeColors['primary'] = theme(`colors.${themeConfig.primary[0]}.${themeConfig.primary[1]}`);
            themeColors['accent'] = theme(`colors.${themeConfig.accent[0]}.${themeConfig.accent[1]}`);
            themeColors['warn'] = theme(`colors.${themeConfig.warn[0]}.${themeConfig.warn[1]}`);
            themeColorContrasts['primary'] = contrasts[themeConfig.primary[0]][themeConfig.primary[1]];
            themeColorContrasts['accent'] = contrasts[themeConfig.accent[0]][themeConfig.accent[1]];
            themeColorContrasts['warn'] = contrasts[themeConfig.warn[0]][themeConfig.warn[1]];

            // Generate and append custom properties
            utilities = {
                ..._.fromPairs(_.map(themeColors, (value, key) => [`--${e(key)}`, value])),
                ..._.fromPairs(_.map(themeColorContrasts, (value, key) => [`--${e(`${key}-contrast`)}`, value]))
            };

            // Generate utility classes for theme colors
            Object.entries(themeColors).forEach(([key, value]) =>
            {
                utilities = {
                    ...utilities,
                    [`.${e(`text-${key}`)}`]  : withOpacity(value),
                    [`.${e(`bg-${key}`)}`]    : withOpacity(value, 'bg'),
                    [`.${e(`border-${key}`)}`]: withOpacity(value, 'border'),
                    [`.${e(key)}`]            : {
                        ...withOpacity(themeColorContrasts[key]),
                        ...withOpacity(value, 'bg'),
                        '.mat-icon'      : withOpacity(themeColorContrasts[key]),
                        '.text-default'  : withOpacity(themeColorContrasts[key]),
                        '.text-secondary': {
                            ...withOpacity(themeColorContrasts[key]),
                            '--text-opacity': '0.6'
                        },
                        '.text-hint'     : {
                            ...withOpacity(themeColorContrasts[key]),
                            '--text-opacity': '0.38'
                        },
                        '.text-disabled' : {
                            ...withOpacity(themeColorContrasts[key]),
                            '--text-opacity': '0.38'
                        },
                        '.divider'       : {
                            ...withOpacity(themeColorContrasts[key]),
                            '--text-opacity': '0.12'
                        }
                    }
                };

                // Dark variants
                darkUtilities = {
                    ...darkUtilities,
                    [`.${e(`dark:text-${key}`)}`]  : withOpacity(value),
                    [`.${e(`dark:bg-${key}`)}`]    : withOpacity(value, 'bg'),
                    [`.${e(`dark:border-${key}`)}`]: withOpacity(value, 'border'),
                    [`.${e(`dark:${key}`)}`]       : {
                        ...withOpacity(themeColorContrasts[key]),
                        ...withOpacity(value, 'bg'),
                        '.mat-icon'      : withOpacity(themeColorContrasts[key]),
                        '.text-default'  : withOpacity(themeColorContrasts[key]),
                        '.text-secondary': {
                            ...withOpacity(themeColorContrasts[key]),
                            '--text-opacity': '0.6'
                        },
                        '.text-hint'     : {
                            ...withOpacity(themeColorContrasts[key]),
                            '--text-opacity': '0.38'
                        },
                        '.text-disabled' : {
                            ...withOpacity(themeColorContrasts[key]),
                            '--text-opacity': '0.38'
                        },
                        '.divider'       : {
                            ...withOpacity(themeColorContrasts[key]),
                            '--text-opacity': '0.12'
                        }
                    }
                };
            });

            return {
                [`.${e(`theme-${name}`)}`]                                   : utilities,
                [`.${e(`theme-${name}`)}.dark, .${e(`theme-${name}`)} .dark`]: darkUtilities
            };
        });

        addComponents(themeUtilities);

        // -----------------------------------------------------------------------------------------------------
        // @ Color combination utility classes
        // -----------------------------------------------------------------------------------------------------
        // Flatten the contrasting colors for easier access
        const contrastingColors = flattenColorPalette(contrasts);

        // Generate the color combinations from default colors
        const colorCombinationUtilities = _.map(flattenColorPalette(theme('colors')), (value, key) =>
        {
            if ( !contrastingColors[key] )
            {
                return {};
            }

            return {
                [`.${e(key)}, .dark .${e(`dark:${key}`)}`]: {
                    ...withOpacity(contrastingColors[key]),
                    ...withOpacity(value, 'bg'),
                    '.mat-icon'      : withOpacity(contrastingColors[key]),
                    '.text-default'  : withOpacity(contrastingColors[key]),
                    '.text-secondary': {
                        ...withOpacity(contrastingColors[key]),
                        '--text-opacity': '0.6'
                    },
                    '.text-hint'     : {
                        ...withOpacity(contrastingColors[key]),
                        '--text-opacity': '0.38'
                    },
                    '.text-disabled' : {
                        ...withOpacity(contrastingColors[key]),
                        '--text-opacity': '0.38'
                    },
                    '.divider'       : {
                        ...withOpacity(contrastingColors[key]),
                        '--text-opacity': '0.12'
                    }
                }
            };
        });

        addUtilities(colorCombinationUtilities, variants('treoColorCombinations'));

        // -----------------------------------------------------------------------------------------------------
        // @ Icon color utility classes
        // -----------------------------------------------------------------------------------------------------
        const iconColorUtilities = _.map(theme('treo.themes'), (themeConfig, name) =>
        {
            // Prepare theme colors
            const themeColors = flattenColorPalette({
                primary: theme(`colors.${themeConfig.primary[0]}`),
                accent : theme(`colors.${themeConfig.accent[0]}`),
                warn   : theme(`colors.${themeConfig.warn[0]}`)
            });

            // Override the default hues depending on the user's choice
            themeColors['primary'] = theme(`colors.${themeConfig.primary[0]}.${themeConfig.primary[1]}`);
            themeColors['accent'] = theme(`colors.${themeConfig.accent[0]}.${themeConfig.accent[1]}`);
            themeColors['warn'] = theme(`colors.${themeConfig.warn[0]}.${themeConfig.warn[1]}`);

            // Generate icon color utilities for theme colors
            return {
                [`.${e(`theme-${name}`)}`]                                   :
                    _.fromPairs(_.map(themeColors, (value, key) => [`.${e(`icon-${key}`)}.mat-icon, .${e(`icon-${key}`)} .mat-icon`, withOpacity(value)])),
                [`.${e(`theme-${name}`)}.dark, .${e(`theme-${name}`)} .dark`]:
                    _.fromPairs(_.map(themeColors, (value, key) => [`.${e(`dark:icon-${key}`)}.mat-icon, .${e(`dark:icon-${key}`)} .mat-icon`, withOpacity(value)]))
            };
        });

        // Generate icon color utilities for default colors
        iconColorUtilities.push(
            _.fromPairs(_.map(flattenColorPalette(theme('treo.iconColor')), (value, key) => [`.${e(`icon-${key}`)}.mat-icon, .${e(`icon-${key}`)} .mat-icon`, withOpacity(value)])),
            _.fromPairs(_.map(flattenColorPalette(theme('treo.iconColor')), (value, key) => [`.dark .${e(`dark:icon-${key}`)}.mat-icon, .dark .${e(`dark:icon-${key}`)} .mat-icon`, withOpacity(value)]))
        );

        addUtilities(iconColorUtilities, variants('treoIconColor'));

        // -----------------------------------------------------------------------------------------------------
        // @ Icon size utility classes
        // -----------------------------------------------------------------------------------------------------
        const iconSizeUtilities = _.map(theme('treo.iconSize'), (value, key) =>
        {
            return {
                [`.${e(`icon-size-${key}`)}`]: {
                    width     : value,
                    height    : value,
                    minWidth  : value,
                    minHeight : value,
                    fontSize  : value,
                    lineHeight: value,
                    [`svg`]   : {
                        width : value,
                        height: value
                    }
                }
            };
        });

        addUtilities(iconSizeUtilities, variants('treoIconSize'));

        // -----------------------------------------------------------------------------------------------------
        // @ Line clamp utility classes
        // -----------------------------------------------------------------------------------------------------
        const lineClampUtilities = _.map(theme('treo.lineClamp'), (value, key) =>
        {
            return {
                [`.${e(`line-clamp-${key}`)}`]: {
                    'display'           : '-webkit-box',
                    '-webkit-line-clamp': value,
                    '-webkit-box-orient': 'vertical',
                    'overflow'          : key === 'none' ? 'visible' : 'hidden'
                }
            };
        });

        addUtilities(lineClampUtilities, variants('treoLineClamp'));

        // -----------------------------------------------------------------------------------------------------
        // @ Mirror utility classes
        // -----------------------------------------------------------------------------------------------------
        const mirrorUtilities = {
            [`.mirror`]         : {
                transform: `scale(-1, 1)`
            },
            [`.mirror-vertical`]: {
                transform: `scale(1, -1)`
            }
        };

        addUtilities(mirrorUtilities, variants('treoMirror'));

        // -----------------------------------------------------------------------------------------------------
        // @ Angular Material theme generator code generating variant
        // -----------------------------------------------------------------------------------------------------
        const angularMaterialThemesVariant = ({container}) =>
        {
            // Append required imports and includes
            container.append(`
                @use "sass:map";
                @import '~@angular/material/theming';
                @include mat-core();
            `);

            // ##### Generate Angular Material compatible palettes map #####

            // Prepare the map
            let map = '';

            // Iterate through Material palettes
            Object.entries(materialPalettes)
                .forEach(([name, palette]) =>
                {
                    // Prepare contrasts and hues
                    let contrasts = '';
                    let hues = '';

                    // Iterate through the palette colors
                    Object.entries(palette)
                        .filter(([hue, color]) => hue !== 'DEFAULT')
                        .forEach(([hue, color]) =>
                        {
                            // If the item is the contrast map...
                            if ( hue === 'contrast' )
                            {
                                Object.entries(color)
                                    .filter(([hue, color]) => hue !== 'DEFAULT')
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

            // ##### Generate Angular Material theme generator code #####

            // Prepare the theme generator string
            let themeGenCode = '';

            // Generate "$background-light", "$background-dark", "$foreground-light" and "$foreground-dark" maps
            ['background', 'foreground'].forEach((colorMap) =>
            {
                colorSchemes.forEach((colorScheme) =>
                {
                    // Generate the map
                    let map = '';
                    Object.entries(theme(`treo.material.colors.${colorMap}.${colorScheme}`)).forEach(([name, color]) =>
                    {
                        map = `${map} ${name}:${color}, `;
                    });

                    // Add generated map to the theme generator code
                    themeGenCode = `${themeGenCode}
                        $${colorMap}-${colorScheme}: (${map});
                    `;
                });
            });

            // Generate Angular Material Typography setup code
            themeGenCode = `${themeGenCode}
                @include angular-material-typography(
                    mat-typography-config(
                        $font-family: '${Array.isArray(theme('fontFamily.sans')) ? theme('fontFamily.sans').join(', ') : theme('fontFamily.sans')}',
                        $title: mat-typography-level(1.25rem, 2rem, 600),
                        $body-2: mat-typography-level(0.875rem, 1.5rem, 600),
                        $button: mat-typography-level(0.875rem, 0.875rem, 500),
                        $input: mat-typography-level(0.875rem, 1.2857142857, 400) // line-height: 20px
                    )
                );
            `;

            // Iterate through user defined themes
            Object.entries(theme('treo.themes'))
                .forEach(([name, themeConfig]) =>
                {
                    // Iterate through color schemes
                    colorSchemes.forEach((colorScheme) =>
                    {
                        // Generate the code for the theme
                        themeGenCode = `${themeGenCode}
                            .theme-${name}.${colorScheme},
                            .theme-${name} .${colorScheme} {
                                $base-angular-material-theme-for-${name}: mat-${colorScheme}-theme(
                                    (
                                        color: (
                                            primary: mat-palette(map.get($treo-material-palettes, '${themeConfig.primary[0]}'), ${themeConfig.primary[1]}, 100, 700, ${themeConfig.primary[1]}),
                                            accent: mat-palette(map.get($treo-material-palettes, '${themeConfig.accent[0]}'), ${themeConfig.accent[1]}, 100, 700, ${themeConfig.accent[1]}),
                                            warn: mat-palette(map.get($treo-material-palettes, '${themeConfig.warn[0]}'), ${themeConfig.warn[1]}, 100, 700, ${themeConfig.warn[1]})
                                        )
                                    )
                                );

                                $angular-material-theme-for-${name}: (
                                    color: (
                                        primary: map.get(map.get($base-angular-material-theme-for-${name}, color), primary),
                                        accent: map.get(map.get($base-angular-material-theme-for-${name}, color), accent),
                                        warn: map.get(map.get($base-angular-material-theme-for-${name}, color), warn),
                                        is-dark: map.get(map.get($base-angular-material-theme-for-${name}, color), is-dark),
                                        foreground: $foreground-${colorScheme},
                                        background: $background-${colorScheme}
                                    ),
                                    typography: null,
                                    density: null,
                                    primary: map.get(map.get($base-angular-material-theme-for-${name}, color), primary),
                                    accent: map.get(map.get($base-angular-material-theme-for-${name}, color), accent),
                                    warn: map.get(map.get($base-angular-material-theme-for-${name}, color), warn),
                                    is-dark: map.get(map.get($base-angular-material-theme-for-${name}, color), is-dark),
                                    foreground: $foreground-${colorScheme},
                                    background: $background-${colorScheme}
                                );

                                @include angular-material-theme($angular-material-theme-for-${name});
                            }
                        `;
                    });
                });

            // Append the theme generator code into the container
            container.append(themeGenCode);
        };

        addVariant('treo-angular-material-themes', angularMaterialThemesVariant);
    },

    // Treo Tailwind plugin default configuration
    {
        theme   : {
            treo  : {
                contrasts               : {},
                customPropertyDictionary: {
                    background: {
                        'bg-app-bar'   : 'app-bar',
                        'bg-card'      : 'card',
                        'bg-default'   : 'background',
                        'bg-dialog'    : 'dialog',
                        'bg-hover'     : 'hover',
                        'bg-status-bar': 'status-bar'
                    },
                    foreground: {
                        'text-default'  : 'text',
                        'text-secondary': 'secondary-text',
                        'text-hint'     : 'hint-text',
                        'text-disabled' : 'disabled-text',
                        'divider'       : 'divider',
                        'icon'          : 'icon'
                    }
                },
                iconColor               : {
                    ...colorsWithDefaults()
                },
                iconSize                : {
                    3  : '0.75rem',
                    3.5: '0.875rem',
                    4  : '1rem',
                    4.5: '1.125rem',
                    5  : '1.25rem',
                    6  : '1.5rem',
                    7  : '1.75rem',
                    8  : '2rem',
                    10 : '2.5rem',
                    12 : '3rem',
                    14 : '3.5rem',
                    16 : '4rem',
                    18 : '4.5rem',
                    20 : '5rem',
                    22 : '5.5rem',
                    24 : '6rem'
                },
                lineClamp               : {
                    'none': 'none',
                    1     : '1',
                    2     : '2',
                    3     : '3'
                },
                material                : {
                    colors: {
                        background: {
                            light: {
                                'status-bar'              : colors.blueGray['300'],
                                'app-bar'                 : '#FFFFFF',
                                'background'              : colors.blueGray['100'],
                                'hover'                   : `rgba(${colors.blueGray['400']}, 0.12)`,
                                'card'                    : '#FFFFFF',
                                'dialog'                  : '#FFFFFF',
                                'disabled-button'         : `rgba(${colors.blueGray['400']}, 0.38)`,
                                'raised-button'           : '#FFFFFF',
                                'focused-button'          : colors.blueGray['500'],
                                'selected-button'         : colors.blueGray['200'],
                                'selected-disabled-button': colors.blueGray['200'],
                                'disabled-button-toggle'  : colors.blueGray['300'],
                                'unselected-chip'         : colors.blueGray['200'],
                                'disabled-list-option'    : colors.blueGray['300'],
                                'tooltip'                 : colors.blueGray['800']
                            },
                            dark : {
                                'status-bar'              : colors.blueGray['900'],
                                'app-bar'                 : colors.blueGray['900'],
                                'background'              : colors.blueGray['900'],
                                'hover'                   : 'rgba(255, 255, 255, 0.05)',
                                'card'                    : colors.blueGray['800'],
                                'dialog'                  : colors.blueGray['800'],
                                'disabled-button'         : `rgba(${colors.blueGray['900']}, 0.38)`,
                                'raised-button'           : colors.blueGray['900'],
                                'focused-button'          : colors.blueGray['200'],
                                'selected-button'         : 'rgba(255, 255, 255, 0.05)',
                                'selected-disabled-button': colors.blueGray['800'],
                                'disabled-button-toggle'  : colors.blueGray['900'],
                                'unselected-chip'         : colors.blueGray['600'],
                                'disabled-list-option'    : colors.blueGray['200'],
                                'tooltip'                 : colors.blueGray['500']
                            }
                        },
                        foreground: {
                            light: {
                                'base'             : '#000000',
                                'divider'          : colors.blueGray['200'],
                                'dividers'         : colors.blueGray['200'],
                                'disabled'         : colors.blueGray['400'],
                                'disabled-button'  : colors.blueGray['400'],
                                'disabled-text'    : colors.blueGray['400'],
                                'elevation'        : '#000000',
                                'hint-text'        : colors.blueGray['400'],
                                'secondary-text'   : colors.blueGray['500'],
                                'icon'             : colors.blueGray['500'],
                                'icons'            : colors.blueGray['500'],
                                'text'             : colors.blueGray['800'],
                                'slider-min'       : colors.blueGray['800'],
                                'slider-off'       : colors.blueGray['300'],
                                'slider-off-active': colors.blueGray['400']
                            },
                            dark : {
                                'base'             : '#FFFFFF',
                                'divider'          : `rgba(${colors.blueGray['100']}, 0.12)`,
                                'dividers'         : `rgba(${colors.blueGray['100']}, 0.12)`,
                                'disabled'         : colors.blueGray['600'],
                                'disabled-button'  : colors.blueGray['800'],
                                'disabled-text'    : colors.blueGray['600'],
                                'elevation'        : '#000000',
                                'hint-text'        : colors.blueGray['500'],
                                'secondary-text'   : colors.blueGray['400'],
                                'icon'             : colors.blueGray['100'],
                                'icons'            : colors.blueGray['100'],
                                'text'             : '#FFFFFF',
                                'slider-min'       : '#FFFFFF',
                                'slider-off'       : colors.blueGray['500'],
                                'slider-off-active': colors.blueGray['400']
                            }
                        }
                    }
                },
                spacing                 : {},
                themes                  : {}
            },
            colors: {
                transparent: 'transparent',
                current    : 'currentColor',
                black      : '#000000',
                white      : '#FFFFFF',
                ...colorsWithDefaults()
            }
        },
        variants: {
            treoColorCombinations: [],
            treoIconColor        : [],
            treoIconSize         : ['responsive'],
            treoLineClamp        : ['responsive'],
            treoMirror           : []
        }
    }
);
