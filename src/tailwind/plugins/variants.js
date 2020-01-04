const postcss = require('postcss');
const buildMediaQuery = require('tailwindcss/lib/util/buildMediaQuery').default;

module.exports = {

    /**
     * Exports boxShadow configuration as an SCSS map
     */
    exportBoxShadow: () => {

        return ({addVariant, theme}) => {

            const variant = ({container}) => {

                let map = '';

                Object.keys(theme('boxShadow')).forEach(shadow => {
                    map = `${map} '${shadow}': '${theme('boxShadow.' + shadow)}',\n`;
                });

                container.append(
                    postcss.decl({
                        prop : '$asm-elevations',
                        value: `(\n ${map} ) !default`
                    })
                );
            };

            addVariant('exportBoxShadow', variant);
        }
    },

    /**
     * Exports color configuration as an SCSS map
     */
    exportColors: () => {

        const isObject = (obj) => !!obj && obj.constructor === Object;

        return ({addVariant, theme}) => {

            const variant = ({container}) => {

                let map = '';

                Object.keys(theme('colors')).forEach(color => {

                    let hues = '';
                    let contrasts = '';

                    if ( isObject(theme('colors.' + color)) )
                    {
                        // Hue
                        Object.keys(theme('colors.' + color)).forEach(hue => {

                            // Skip the 'default' hue
                            if ( hue === 'default' )
                            {
                                return;
                            }

                            // Append the new entry
                            hues = `${hues} ${hue}: ${theme('colors.' + color + '.' + hue)},\n`;
                        });

                        // Contrasts
                        Object.keys(theme('colorContrasts.' + color)).forEach(hue => {

                            // Skip the 'default' hue
                            if ( hue === 'default' )
                            {
                                return;
                            }

                            // Append the new entry
                            contrasts = `${contrasts} ${hue}: ${theme('colorContrasts.' + color + '.' + hue)},\n`;
                        });
                    }
                    else
                    {
                        // Skip the 'transparent' color
                        if ( color === 'transparent' )
                        {
                            return;
                        }

                        // Hue
                        [100, 200, 300, 400, 500, 600, 700, 800, 900].forEach((hue) => {
                            hues = `${hues} ${hue}: ${theme('colors.' + color)},\n`;
                        });

                        // Contrasts
                        [100, 200, 300, 400, 500, 600, 700, 800, 900].forEach((hue) => {
                            contrasts = `${contrasts} ${hue}: ${theme('colorContrasts.' + color)},\n`;
                        });
                    }

                    // Append the new map
                    map = `${map} '${color}': (\n ${hues} contrast: (\n ${contrasts} )\n),\n`;
                });

                container.append(
                    postcss.decl({
                        prop : '$asm-colors',
                        value: `(\n ${map} ) !default`
                    })
                );
            };

            addVariant('exportColors', variant);
        }
    },

    /**
     * Exports breakpoints configuration as an SCSS map
     */
    exportScreens: () => {

        return ({addVariant, theme}) => {

            const variant = ({container}) => {

                let map = '';

                Object.keys(theme('screens')).forEach(screen => {
                    map = `${map} ${screen}: '${buildMediaQuery(theme('screens.' + screen))}',\n`;
                });

                container.append(
                    postcss.decl({
                        prop : '$asm-breakpoints',
                        value: `(\n ${map} ) !default`
                    })
                );
            };

            addVariant('exportScreens', variant);
        }
    },

    /**
     * Adds 'dark' variant
     */
    themeDark: () => {

        return ({addVariant, e, theme}) => {

            const variant = ({modifySelectors, separator}) => {
                modifySelectors(({className}) => {
                    return `[class*="theme-dark"].${e(`dark${separator}${className}`)}, [class*="theme-dark"] .${e(`dark${separator}${className}`)}`
                })
            };

            addVariant('dark', variant);
        }
    },

    /**
     * Adds 'light' variant
     */
    themeLight: () => {

        return ({addVariant, e, theme}) => {

            const variant = ({modifySelectors, separator}) => {
                modifySelectors(({className}) => {
                    return `[class*="theme-light"].${e(`light${separator}${className}`)}, [class*="theme-light"] .${e(`light${separator}${className}`)}`
                })
            };

            addVariant('light', variant);
        }
    }
};
