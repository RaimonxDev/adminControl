const _ = require('lodash');

module.exports = {

    /**
     * Adds utility classes for contrasting colors such as
     * 'text-red-200-contrast' and 'bg-blue-contrast'
     */
    colorContrastsUtilities: () => {

        return ({addUtilities, theme, e}) => {

            const utilities = _.map(theme('colorContrasts'), (value, colorName) => {

                if ( _.isObject(value) )
                {
                    return _.map(value, (color, hueName) => {

                        hueName = hueName === 'default' ? '' : `-${hueName}`;

                        return {
                            [`.${e(`text-${colorName}${hueName}-contrast`)}`]: {
                                color: color
                            },
                            [`.${e(`bg-${colorName}${hueName}-contrast`)}`]  : {
                                backgroundColor: color
                            }
                        }
                    });
                }
                else
                {
                    return {
                        [`.${e(`text-${colorName}-contrast`)}`]: {
                            color: value
                        },
                        [`.${e(`bg-${colorName}-contrast`)}`]  : {
                            backgroundColor: value
                        }
                    }
                }
            });

            addUtilities(utilities);
        }
    },

    /**
     * Adds a component that combines both background and its contrasting color
     * for Tailwind colors. Also adds basic utilities for the combined colors
     * so we can do things like '.teal.text-secondary' or '.red .text-hint' etc.
     */
    colorCombinationsUtilities: () => {

        return ({addUtilities, theme, variants, e}) => {

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
        };
    },

    /**
     * Adds utility classes for .mat-icon size
     */
    iconSizeUtilities: () => {

        return ({addUtilities, theme, variants, e}) => {

            const utilities = _.map(theme('iconSize'), (value, key) => {

                return {
                    [`.${e(`icon-size-${key}`)}`]: {
                        width     : value,
                        height    : value,
                        minWidth  : value,
                        minHeight : value,
                        fontSize  : value,
                        lineHeight: value,
                        [`svg`]   : {
                            width     : value,
                            height    : value,
                            minWidth  : value,
                            minHeight : value,
                            fontSize  : value,
                            lineHeight: value
                        }
                    }
                }
            });

            addUtilities(utilities, variants('iconSize'));
        }
    },

    /**
     * Adds utility classes for mirroring
     */
    mirrorUtilities: () => {

        return ({addUtilities, theme, variants, e}) => {

            const utilities = {
                [`.mirror`]: {
                    transform: `scale(-1, 1)`
                }
            };

            addUtilities(utilities, variants('mirror'));
        }
    },

    /**
     * Adds utility classes for rotating
     */
    rotateUtilities: () => {

        return ({addUtilities, theme, variants, e}) => {

            const utilities = _.map(theme('rotate'), (value, key) => {

                return {
                    [`.${e(`rotate-${key}`)}`]: {
                        transform: `rotate(${value})`
                    }
                }
            });

            addUtilities(utilities, variants('rotate'));
        }
    }
};
