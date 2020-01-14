const plugin = require('tailwindcss/plugin');
const _ = require('lodash');

/**
 * Adds a component that combines both background and its contrasting color
 * for Tailwind colors. Also adds basic utilities for the combined colors
 * so we can do things like '.teal.text-secondary' or '.red .text-hint' etc.
 */
module.exports = plugin(({addUtilities, variants, theme, e}) => {

        const generateCombinedColorRules = (colorName, hueName, color) => {

            const contrastColor = theme(`colorContrasts.${colorName}${hueName ? `.${hueName}` : ``}`);

            return {
                [`.${e(`${colorName}${hueName && hueName !== 'default' ? `-${hueName}` : ``}`)}`]: {
                    backgroundColor: `${color} !important`,
                    color          : `${contrastColor} !important`,

                    [`&.mat-icon, .mat-icon`]: {
                        color: `${contrastColor} !important`
                    },

                    [`&.text-secondary, .text-secondary`]: {
                        color: `rgba(${contrastColor}, 0.7) !important`
                    },

                    [`&.text-hint, .text-hint, &.text-disabled, .text-disabled`]: {
                        color: `rgba(${contrastColor}, 0.38) !important`
                    },

                    [`&.divider, .divider`]: {
                        color: `rgba(${contrastColor}, 0.12) !important`
                    }
                }
            }
        };

        const utilities = _.map(theme('colors'), (value, colorName) => {

            if ( _.isObject(value) )
            {
                return _.map(value, (color, hueName) => {
                    return generateCombinedColorRules(colorName, hueName, color);
                });
            }
            else
            {
                if ( colorName === 'transparent' )
                {
                    return;
                }

                return generateCombinedColorRules(colorName, '', value);
            }
        });

        addUtilities(utilities, variants('colorCombinations'));
    },
    {
        variants: {
            colorCombinations: ['dark', 'light']
        }
    }
);