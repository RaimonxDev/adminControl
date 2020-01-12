const {colors} = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const _ = require('lodash');

/**
 * Adds utility classes for contrasting colors such as
 * 'text-red-200-contrast' and 'bg-blue-contrast'
 */
module.exports = plugin(({addUtilities, variants, theme, e}) => {

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

        addUtilities(utilities, variants('colorContrasts'));
    },
    {
        theme   : {
            colorContrasts: {
                black : colors.white,
                white : colors.gray['800'],
                gray  : {
                    100    : colors.gray['900'],
                    200    : colors.gray['900'],
                    300    : colors.gray['900'],
                    400    : colors.gray['900'],
                    500    : colors.gray['900'],
                    600    : colors.gray['100'],
                    700    : colors.gray['100'],
                    800    : colors.gray['100'],
                    900    : colors.gray['100'],
                    default: colors.gray['900']
                },
                red   : {
                    100    : colors.red['900'],
                    200    : colors.red['900'],
                    300    : colors.red['900'],
                    400    : colors.red['900'],
                    500    : colors.red['900'],
                    600    : colors.red['100'],
                    700    : colors.red['100'],
                    800    : colors.red['100'],
                    900    : colors.red['100'],
                    default: colors.red['900']
                },
                orange: {
                    100    : colors.orange['900'],
                    200    : colors.orange['900'],
                    300    : colors.orange['900'],
                    400    : colors.orange['900'],
                    500    : colors.orange['900'],
                    600    : colors.orange['100'],
                    700    : colors.orange['100'],
                    800    : colors.orange['100'],
                    900    : colors.orange['100'],
                    default: colors.orange['900']
                },
                yellow: {
                    100    : colors.yellow['900'],
                    200    : colors.yellow['900'],
                    300    : colors.yellow['900'],
                    400    : colors.yellow['900'],
                    500    : colors.yellow['900'],
                    600    : colors.yellow['100'],
                    700    : colors.yellow['100'],
                    800    : colors.yellow['100'],
                    900    : colors.yellow['100'],
                    default: colors.yellow['900']
                },
                green : {
                    100    : colors.green['900'],
                    200    : colors.green['900'],
                    300    : colors.green['900'],
                    400    : colors.green['900'],
                    500    : colors.green['100'],
                    600    : colors.green['100'],
                    700    : colors.green['100'],
                    800    : colors.green['100'],
                    900    : colors.green['100'],
                    default: colors.green['100']
                },
                teal  : {
                    100    : colors.teal['900'],
                    200    : colors.teal['900'],
                    300    : colors.teal['900'],
                    400    : colors.teal['900'],
                    500    : colors.teal['100'],
                    600    : colors.teal['100'],
                    700    : colors.teal['100'],
                    800    : colors.teal['100'],
                    900    : colors.teal['100'],
                    default: colors.teal['100']
                },
                blue  : {
                    100    : colors.blue['900'],
                    200    : colors.blue['900'],
                    300    : colors.blue['900'],
                    400    : colors.blue['900'],
                    500    : colors.blue['100'],
                    600    : colors.blue['100'],
                    700    : colors.blue['100'],
                    800    : colors.blue['100'],
                    900    : colors.blue['100'],
                    default: colors.blue['100']
                },
                indigo: {
                    100    : colors.indigo['900'],
                    200    : colors.indigo['900'],
                    300    : colors.indigo['900'],
                    400    : colors.indigo['900'],
                    500    : colors.indigo['100'],
                    600    : colors.indigo['100'],
                    700    : colors.indigo['100'],
                    800    : colors.indigo['100'],
                    900    : colors.indigo['100'],
                    default: colors.indigo['100']
                },
                purple: {
                    100    : colors.purple['900'],
                    200    : colors.purple['900'],
                    300    : colors.purple['900'],
                    400    : colors.purple['900'],
                    500    : colors.purple['100'],
                    600    : colors.purple['100'],
                    700    : colors.purple['100'],
                    800    : colors.purple['100'],
                    900    : colors.purple['100'],
                    default: colors.purple['100']
                },
                pink  : {
                    100    : colors.pink['900'],
                    200    : colors.pink['900'],
                    300    : colors.pink['900'],
                    400    : colors.pink['900'],
                    500    : colors.pink['100'],
                    600    : colors.pink['100'],
                    700    : colors.pink['100'],
                    800    : colors.pink['100'],
                    900    : colors.pink['100'],
                    default: colors.pink['100']
                }
            }
        },
        variants: {
            colorContrasts: []
        }
    }
);
