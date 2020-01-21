const plugin = require('tailwindcss/plugin');
const postcss = require('postcss');
const _ = require('lodash');

/**
 * Exports 'fontFamily' configuration as an SCSS map
 */
module.exports = plugin(({addVariant, theme}) => {

    const variant = ({container}) => {

        let map = '';

        _.forEach(theme('fontFamily'), (value, key) => {
            // map = `${map} '${key}': '${theme('boxShadow.' + key)}',\n`;

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
