const chroma = require('chroma-js');
const _ = require('lodash');
const path = require('path');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;
const generateContrasts = require(path.resolve(__dirname, ('../utils/generate-contrasts')));

// -----------------------------------------------------------------------------------------------------
// @ Utilities
// -----------------------------------------------------------------------------------------------------

/**
 * Normalize the provided theme
 *
 * @param theme
 */
const normalizeTheme = (theme) =>
{
    return _.fromPairs(_.map(_.omitBy(theme, (palette, paletteName) => paletteName.startsWith('on') || _.isEmpty(palette)),
        (palette, paletteName) => [
            paletteName,
            {
                ...palette,
                DEFAULT: palette['DEFAULT'] || palette[500]
            }
        ]
    ));
};

/**
 * Generates variable colors for the 'colors'
 * configuration from the provided theme
 *
 * @param theme
 */
const generateVariableColors = (theme) =>
{
    // https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo
    const customPropertiesWithOpacity = (name) => ({
        opacityVariable,
        opacityValue
    }) =>
    {
        if ( opacityValue )
        {
            return `rgba(var(--treo-color-${name}), ${opacityValue})`;
        }
        if ( opacityVariable )
        {
            return `rgba(var(--treo-color-${name}), var(${opacityVariable}, 1))`;
        }
        return `rgb(var(--treo-color-${name}))`;
    };

    return _.fromPairs(_.flatten(_.map(_.keys(flattenColorPalette(normalizeTheme(theme))), (name) => [
        [name, customPropertiesWithOpacity(name)],
        [`on-${name}`, customPropertiesWithOpacity(name)]
    ])));
};


// -----------------------------------------------------------------------------------------------------
// @ TREO TailwindCSS Main Plugin
// -----------------------------------------------------------------------------------------------------
const theming = plugin.withOptions((options) => ({
        addComponents,
        addVariant,
        e,
        theme
    }) =>
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Map variable colors
        // -----------------------------------------------------------------------------------------------------
        const mapVariableColors = _.fromPairs(_.map(options.themes, (theme, themeName) => [
            themeName === 'default' ? 'body' : `body.theme-${e(themeName)}`,
            _.fromPairs(_.map(flattenColorPalette(_.fromPairs(_.flatten(_.map(normalizeTheme(theme), (palette, paletteName) => [
                    [
                        e(paletteName),
                        palette
                    ],
                    [
                        `on-${e(paletteName)}`,
                        _.fromPairs(_.map(generateContrasts(palette), (color, hue) => [hue, _.get(theme, [`on-${paletteName}`, hue]) || color]))
                    ]
                ])
            ))), (value, key) => [`--treo-color-${e(key)}`, value]))
        ]));

        addComponents(mapVariableColors);

        // -----------------------------------------------------------------------------------------------------
        // @ Generate scheme based css custom properties and utility classes
        // -----------------------------------------------------------------------------------------------------
        const schemeCustomProps = _.map(['light', 'dark'], (colorScheme) =>
        {
            const isDark = colorScheme === 'dark';
            const dictionary = theme(`treo.customProps`);
            const background = theme(`treo.material.colors.background.${colorScheme}`);
            const foreground = theme(`treo.material.colors.foreground.${colorScheme}`);
            const lightSchemeSelector = 'body:not(.dark)';
            const darkSchemeSelector = 'body.dark';

            return {
                [(isDark ? darkSchemeSelector : lightSchemeSelector)]: {

                    /**
                     * If a custom property is not available, browsers will use
                     * the fallback value. In this case, we want to use '--is-dark'
                     * as the indicator of a dark theme so we can use it like this:
                     * background-color: var(--is-dark, red);
                     *
                     * If we set '--is-dark' as "true" on dark themes, the above rule
                     * won't work because of the said "fallback value" logic. Therefore,
                     * we set the '--is-dark' to "false" on light themes and not set it
                     * all on dark themes so that the fallback value can be used on
                     * dark themes.
                     *
                     * On light themes, since '--is-dark' exists, the above rule will be
                     * interpolated as:
                     * "background-color: false"
                     *
                     * On dark themes, since '--is-dark' doesn't exist, the fallback value
                     * will be used ('red' in this case) and the rule will be interpolated as:
                     * "background-color: red"
                     *
                     * It's easier to understand and remember like this.
                     */
                    ...(!isDark ? {'--is-dark': 'false'} : {}),

                    // Generate custom props from dictionary
                    ..._.fromPairs(_.map(dictionary.background, (value, key) => [`--treo-${e(key)}`, background[value]])),
                    ..._.fromPairs(_.map(dictionary.foreground, (value, key) => [`--treo-${e(key)}`, foreground[value]]))
                }
            };
        });

        const schemeUtilities = (() =>
        {
            // Generate general styles & utilities
            return {};
        })();

        addComponents(schemeCustomProps);
        addComponents(schemeUtilities);

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

            // Prepare the theme generator string
            let themeGenCode = '';

            // Generate "$background-light", "$background-dark", "$foreground-light" and "$foreground-dark" maps
            ['background', 'foreground'].forEach((type) =>
            {
                ['light', 'dark'].forEach((scheme) =>
                {
                    // Generate the map
                    let map = '';
                    Object.entries(theme(`treo.material.colors.${type}.${scheme}`)).forEach(([name, color]) =>
                    {
                        map = `${map} ${name}:${color}, `;
                    });

                    // Add generated map to the theme generator code
                    themeGenCode = `${themeGenCode}
                        $${type}-${scheme}: (${map});
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

            // Generate palette maps
            const paletteMap = _.fromPairs(['primary', 'accent', 'warn'].map((palette) => [
                palette,
                `${palette}: (
                    50: var(--treo-color-${palette}-50),
                    100: var(--treo-color-${palette}-100),
                    200: var(--treo-color-${palette}-200),
                    300: var(--treo-color-${palette}-300),
                    400: var(--treo-color-${palette}-400),
                    500: var(--treo-color-${palette}-500),
                    600: var(--treo-color-${palette}-600),
                    700: var(--treo-color-${palette}-700),
                    800: var(--treo-color-${palette}-800),
                    900: var(--treo-color-${palette}-900),
                    contrast: (
                        50: var(--treo-color-on-${palette}-50),
                        100: var(--treo-color-on-${palette}-100),
                        200: var(--treo-color-on-${palette}-200),
                        300: var(--treo-color-on-${palette}-300),
                        400: var(--treo-color-on-${palette}-400),
                        500: var(--treo-color-on-${palette}-500),
                        600: var(--treo-color-on-${palette}-600),
                        700: var(--treo-color-on-${palette}-700),
                        800: var(--treo-color-on-${palette}-800),
                        900: var(--treo-color-on-${palette}-900)
                    ),
                    default: var(--treo-color-${palette}),
                    lighter: var(--treo-color-${palette}-100),
                    darker: var(--treo-color-${palette}-700),
                    text: var(--treo-color-${palette}),
                    default-contrast: var(--treo-color-on-${palette}),
                    lighter-contrast: var(--treo-color-on-${palette}-100),
                    darker-contrast: var(--treo-color-on-${palette}-700),
                )`
            ]));

            // Iterate through color schemes
            ['light', 'dark'].forEach((colorScheme) =>
            {
                // Generate the code for the theme
                themeGenCode = `${themeGenCode}
                    body.${colorScheme},
                    .body .${colorScheme} {
                        $base-${colorScheme}-theme: mat-${colorScheme}-theme((
                            color: (
                                ${paletteMap.primary},
                                ${paletteMap.accent},
                                ${paletteMap.warn}
                            )
                        ));

                        $${colorScheme}-theme: (
                            color: (
                                primary: map.get(map.get($base-${colorScheme}-theme, color), primary),
                                accent: map.get(map.get($base-${colorScheme}-theme, color), accent),
                                warn: map.get(map.get($base-${colorScheme}-theme, color), warn),
                                is-dark: map.get(map.get($base-${colorScheme}-theme, color), is-dark),
                                foreground: $foreground-${colorScheme},
                                background: $background-${colorScheme}
                            ),
                            typography: null,
                            density: null,
                            primary: map.get(map.get($base-${colorScheme}-theme, color), primary),
                            accent: map.get(map.get($base-${colorScheme}-theme, color), accent),
                            warn: map.get(map.get($base-${colorScheme}-theme, color), warn),
                            is-dark: map.get(map.get($base-${colorScheme}-theme, color), is-dark),
                            foreground: $foreground-${colorScheme},
                            background: $background-${colorScheme}
                        );

                        @include angular-material-theme($${colorScheme}-theme);
                    }
                `;
            });

            // Append the theme generator code into the container
            container.append(themeGenCode);
        };

        addVariant('treo-angular-material-themes', angularMaterialThemesVariant);
    },
    (options) =>
    {
        return {
            theme   : {
                extend: {
                    colors: generateVariableColors(options.themes.default)
                },
                treo  : {
                    customProps: {
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
                            'border'        : 'divider',
                            'divider'       : 'divider',
                            'icon'          : 'icon',
                            'mat-icon'      : 'mat-icon'
                        }
                    },
                    material   : {
                        colors: {
                            background: {
                                light: {
                                    'status-bar'              : colors.blueGray[300],
                                    'app-bar'                 : '#FFFFFF',
                                    'background'              : colors.blueGray[100],
                                    'hover'                   : chroma(colors.blueGray[400]).alpha(0.12).css(),
                                    'card'                    : '#FFFFFF',
                                    'dialog'                  : '#FFFFFF',
                                    'disabled-button'         : chroma(colors.blueGray[400]).alpha(0.38).css(),
                                    'raised-button'           : '#FFFFFF',
                                    'focused-button'          : colors.blueGray[500],
                                    'selected-button'         : colors.blueGray[200],
                                    'selected-disabled-button': colors.blueGray[200],
                                    'disabled-button-toggle'  : colors.blueGray[300],
                                    'unselected-chip'         : colors.blueGray[200],
                                    'disabled-list-option'    : colors.blueGray[300],
                                    'tooltip'                 : colors.blueGray[800]
                                },
                                dark : {
                                    'status-bar'              : colors.blueGray[900],
                                    'app-bar'                 : colors.blueGray[900],
                                    'background'              : colors.blueGray[900],
                                    'hover'                   : 'rgba(255, 255, 255, 0.05)',
                                    'card'                    : colors.blueGray[800],
                                    'dialog'                  : colors.blueGray[800],
                                    'disabled-button'         : chroma(colors.blueGray[900]).alpha(0.38).css(),
                                    'raised-button'           : colors.blueGray[900],
                                    'focused-button'          : colors.blueGray[200],
                                    'selected-button'         : 'rgba(255, 255, 255, 0.05)',
                                    'selected-disabled-button': colors.blueGray[800],
                                    'disabled-button-toggle'  : colors.blueGray[900],
                                    'unselected-chip'         : colors.blueGray[600],
                                    'disabled-list-option'    : colors.blueGray[200],
                                    'tooltip'                 : colors.blueGray[500]
                                }
                            },
                            foreground: {
                                light: {
                                    'base'             : '#000000',
                                    'divider'          : colors.blueGray[200],
                                    'dividers'         : colors.blueGray[200],
                                    'disabled'         : colors.blueGray[400],
                                    'disabled-button'  : colors.blueGray[400],
                                    'disabled-text'    : colors.blueGray[400],
                                    'elevation'        : '#000000',
                                    'hint-text'        : colors.blueGray[400],
                                    'secondary-text'   : colors.blueGray[500],
                                    'icon'             : colors.blueGray[500],
                                    'icons'            : colors.blueGray[500],
                                    'mat-icon'         : colors.blueGray[500],
                                    'text'             : colors.blueGray[800],
                                    'slider-min'       : colors.blueGray[800],
                                    'slider-off'       : colors.blueGray[300],
                                    'slider-off-active': colors.blueGray[400]
                                },
                                dark : {
                                    'base'             : '#FFFFFF',
                                    'divider'          : chroma(colors.blueGray[100]).alpha(0.12).css(),
                                    'dividers'         : chroma(colors.blueGray[100]).alpha(0.12).css(),
                                    'disabled'         : colors.blueGray[600],
                                    'disabled-button'  : colors.blueGray[800],
                                    'disabled-text'    : colors.blueGray[600],
                                    'elevation'        : '#000000',
                                    'hint-text'        : colors.blueGray[500],
                                    'secondary-text'   : colors.blueGray[400],
                                    'icon'             : colors.blueGray[100],
                                    'icons'            : colors.blueGray[100],
                                    'mat-icon'         : colors.blueGray[400],
                                    'text'             : '#FFFFFF',
                                    'slider-min'       : '#FFFFFF',
                                    'slider-off'       : colors.blueGray[500],
                                    'slider-off-active': colors.blueGray[400]
                                }
                            }
                        }
                    },
                    themes     : Object.keys(options.themes)
                }
            },
            variants: {}
        };
    }
);

module.exports = theming;
