const plugin = require('tailwindcss/plugin');
const postcss = require('postcss');
const _ = require('lodash');

/**
 * Exports 'colors' configuration as an SCSS map
 */
module.exports = plugin(({addVariant, theme}) => {

        const variant = ({container}) => {

            let map = '';

            _.forEach(theme('colors'), (value, key) => {

                let hues = '';
                let contrasts = '';

                if ( _.isObject(value) )
                {
                    // Hue
                    _.forEach(value, (hueValue, hueName) => {

                        // Skip the 'default' hue
                        if ( hueName === 'default' )
                        {
                            return;
                        }

                        // Append the new entry
                        hues = `${hues} ${hueName}: ${hueValue},\n`;
                    });

                    // Contrasts
                    _.forEach(theme('colorContrasts.' + key), (hueValue, hueName) => {

                        // Skip the 'default' hue
                        if ( hueName === 'default' )
                        {
                            return;
                        }

                        // Append the new entry
                        contrasts = `${contrasts} ${hueName}: ${hueValue},\n`;
                    });
                }
                else
                {
                    // Skip the 'transparent' color
                    if ( value === 'transparent' )
                    {
                        return;
                    }

                    // Hue
                    [100, 200, 300, 400, 500, 600, 700, 800, 900].forEach((hue) => {
                        hues = `${hues} ${hue}: ${value},\n`;
                    });

                    // Contrasts
                    [100, 200, 300, 400, 500, 600, 700, 800, 900].forEach((hue) => {
                        contrasts = `${contrasts} ${hue}: ${theme('colorContrasts.' + key)},\n`;
                    });
                }

                // Append the new map
                map = `${map} '${key}': (\n ${hues} contrast: (\n ${contrasts} )\n),\n`;
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
);
