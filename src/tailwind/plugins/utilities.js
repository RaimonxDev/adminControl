module.exports = {

    /**
     * Adds utility classes for contrasting colors such as
     * 'text-red-200-contrast' and 'bg-blue-contrast'
     */
    colorContrasts: () => {

        const isObject = (obj) => !!obj && obj.constructor === Object;

        return ({addUtilities, theme}) => {

            const contrasts = {};

            Object.keys(theme('colorContrasts')).forEach(contrast => {

                if ( isObject(theme('colorContrasts.' + contrast)) )
                {
                    Object.keys(theme('colorContrasts.' + contrast)).forEach(hue => {
                        const hueLabel = hue === 'default' ? '' : '-' + hue;
                        const hueValue = hue === 'default' ? '.500' : '.' + hue;

                        contrasts['.text-' + contrast + hueLabel + '-contrast'] = {
                            color: theme('colorContrasts.' + contrast + hueValue)
                        };

                        contrasts['.bg-' + contrast + hueLabel + '-contrast'] = {
                            backgroundColor: theme('colorContrasts.' + contrast + hueValue)
                        };
                    });
                }
                else
                {
                    contrasts['.text-' + contrast + '-contrast'] = {
                        color: theme('colorContrasts.' + contrast)
                    };

                    contrasts['.bg-' + contrast + '-contrast'] = {
                        backgroundColor: theme('colorContrasts.' + contrast)
                    };
                }
            });

            addUtilities(contrasts);
        }
    },

    /**
     * Adds a component that combines both background and its contrasting color
     * for Tailwind colors. Also adds basic utilities for the combined colors
     * so we can do things like '.teal.text-secondary' or '.red .text-hint' etc.
     */
    colorCombinations: () => {

        const isObject = (obj) => !!obj && obj.constructor === Object;

        return ({addUtilities, theme, variants}) => {

            const combinedColors = {};
            const generateCombinedColorRules = (color, hueLabel, hueValue) => {

                const themeColor = theme('colors.' + color + hueValue);
                const themeContrastColor = theme('colorContrasts.' + color + hueValue);

                combinedColors['.' + color + hueLabel] = {
                    'backgroundColor': themeColor + '!important',
                    'color'          : themeContrastColor + '!important',

                    '&.mat-icon, .mat-icon': {
                        color: themeContrastColor + '!important'
                    },

                    '&.text-secondary, .text-secondary': {
                        color: 'rgba(' + themeContrastColor + ', 0.7) !important'
                    },

                    '&.text-hint, .text-hint, &.text-disabled, .text-disabled': {
                        color: 'rgba(' + themeContrastColor + ', 0.38) !important'
                    },

                    '&.divider, .divider': {
                        color: 'rgba(' + themeContrastColor + ', 0.12) !important'
                    }
                };
            };

            Object.keys(theme('colors')).forEach(color => {

                if ( isObject(theme('colors.' + color)) )
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

            addUtilities(combinedColors, variants('colorCombinations'));
        };
    }
};
