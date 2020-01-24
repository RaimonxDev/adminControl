const plugin = require('tailwindcss/plugin');
const postcss = require('postcss');
const _ = require('lodash');

/**
 * Exports 'fontFamily' configuration as an SCSS map
 */
module.exports = plugin(({addVariant, theme}) => {

    const variant = ({container}) => {

        _.forEach(theme('fontFamily'), (value, key) => {

            container.append(
                postcss.decl({
                    prop : `$asm-font-${key}`,
                    value: `${value} !default`
                })
            );
        });

    };

    addVariant('exportFontFamily', variant);
});
