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
            colorContrasts: theme => ({
                black      : theme('colors.white'),
                white      : theme('colors.gray.800'),
                gray       : {
                    50     : theme('colors.gray.900'),
                    100    : theme('colors.gray.900'),
                    200    : theme('colors.gray.900'),
                    300    : theme('colors.gray.900'),
                    400    : theme('colors.gray.900'),
                    500    : theme('colors.gray.900'),
                    600    : theme('colors.gray.100'),
                    700    : theme('colors.gray.100'),
                    800    : theme('colors.gray.100'),
                    900    : theme('colors.gray.100'),
                    default: theme('colors.gray.900')
                },
                'cool-gray': {
                    50     : theme('colors.cool-gray.900'),
                    100    : theme('colors.cool-gray.900'),
                    200    : theme('colors.cool-gray.900'),
                    300    : theme('colors.cool-gray.900'),
                    400    : theme('colors.cool-gray.900'),
                    500    : theme('colors.cool-gray.900'),
                    600    : theme('colors.cool-gray.100'),
                    700    : theme('colors.cool-gray.100'),
                    800    : theme('colors.cool-gray.100'),
                    900    : theme('colors.cool-gray.100'),
                    default: theme('colors.cool-gray.900')
                },
                red        : {
                    50     : theme('colors.red.900'),
                    100    : theme('colors.red.900'),
                    200    : theme('colors.red.900'),
                    300    : theme('colors.red.900'),
                    400    : theme('colors.red.900'),
                    500    : theme('colors.red.900'),
                    600    : theme('colors.red.100'),
                    700    : theme('colors.red.100'),
                    800    : theme('colors.red.100'),
                    900    : theme('colors.red.100'),
                    default: theme('colors.red.900')
                },
                orange     : {
                    50     : theme('colors.orange.900'),
                    100    : theme('colors.orange.900'),
                    200    : theme('colors.orange.900'),
                    300    : theme('colors.orange.900'),
                    400    : theme('colors.orange.900'),
                    500    : theme('colors.orange.900'),
                    600    : theme('colors.orange.100'),
                    700    : theme('colors.orange.100'),
                    800    : theme('colors.orange.100'),
                    900    : theme('colors.orange.100'),
                    default: theme('colors.orange.900')
                },
                yellow     : {
                    50     : theme('colors.yellow.900'),
                    100    : theme('colors.yellow.900'),
                    200    : theme('colors.yellow.900'),
                    300    : theme('colors.yellow.900'),
                    400    : theme('colors.yellow.900'),
                    500    : theme('colors.yellow.900'),
                    600    : theme('colors.yellow.100'),
                    700    : theme('colors.yellow.100'),
                    800    : theme('colors.yellow.100'),
                    900    : theme('colors.yellow.100'),
                    default: theme('colors.yellow.900')
                },
                green      : {
                    50     : theme('colors.green.900'),
                    100    : theme('colors.green.900'),
                    200    : theme('colors.green.900'),
                    300    : theme('colors.green.900'),
                    400    : theme('colors.green.900'),
                    500    : theme('colors.green.100'),
                    600    : theme('colors.green.100'),
                    700    : theme('colors.green.100'),
                    800    : theme('colors.green.100'),
                    900    : theme('colors.green.100'),
                    default: theme('colors.green.100')
                },
                teal       : {
                    50     : theme('colors.teal.900'),
                    100    : theme('colors.teal.900'),
                    200    : theme('colors.teal.900'),
                    300    : theme('colors.teal.900'),
                    400    : theme('colors.teal.900'),
                    500    : theme('colors.teal.100'),
                    600    : theme('colors.teal.100'),
                    700    : theme('colors.teal.100'),
                    800    : theme('colors.teal.100'),
                    900    : theme('colors.teal.100'),
                    default: theme('colors.teal.100')
                },
                blue       : {
                    50     : theme('colors.blue.900'),
                    100    : theme('colors.blue.900'),
                    200    : theme('colors.blue.900'),
                    300    : theme('colors.blue.900'),
                    400    : theme('colors.blue.900'),
                    500    : theme('colors.blue.100'),
                    600    : theme('colors.blue.100'),
                    700    : theme('colors.blue.100'),
                    800    : theme('colors.blue.100'),
                    900    : theme('colors.blue.100'),
                    default: theme('colors.blue.100')
                },
                indigo     : {
                    50     : theme('colors.indigo.900'),
                    100    : theme('colors.indigo.900'),
                    200    : theme('colors.indigo.900'),
                    300    : theme('colors.indigo.900'),
                    400    : theme('colors.indigo.900'),
                    500    : theme('colors.indigo.100'),
                    600    : theme('colors.indigo.100'),
                    700    : theme('colors.indigo.100'),
                    800    : theme('colors.indigo.100'),
                    900    : theme('colors.indigo.100'),
                    default: theme('colors.indigo.100')
                },
                purple     : {
                    50     : theme('colors.purple.900'),
                    100    : theme('colors.purple.900'),
                    200    : theme('colors.purple.900'),
                    300    : theme('colors.purple.900'),
                    400    : theme('colors.purple.900'),
                    500    : theme('colors.purple.100'),
                    600    : theme('colors.purple.100'),
                    700    : theme('colors.purple.100'),
                    800    : theme('colors.purple.100'),
                    900    : theme('colors.purple.100'),
                    default: theme('colors.purple.100')
                },
                pink       : {
                    50     : theme('colors.pink.900'),
                    100    : theme('colors.pink.900'),
                    200    : theme('colors.pink.900'),
                    300    : theme('colors.pink.900'),
                    400    : theme('colors.pink.900'),
                    500    : theme('colors.pink.100'),
                    600    : theme('colors.pink.100'),
                    700    : theme('colors.pink.100'),
                    800    : theme('colors.pink.100'),
                    900    : theme('colors.pink.100'),
                    default: theme('colors.pink.100')
                }
            })
        },
        variants: {
            colorContrasts: []
        }
    }
);
