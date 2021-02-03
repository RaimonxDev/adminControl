const _ = require('lodash');
const buildMediaQuery = require('tailwindcss/lib/util/buildMediaQuery').default;
const resolveConfig = require('tailwindcss/resolveConfig');

module.exports = (options) =>
{
    // Resolve the Tailwind configuration
    const tailwindConfig = _.cloneDeep(resolveConfig(options.tailwindConfig));

    // Get the 'treo.themes' config for the names of available themes
    const themes = JSON.stringify(tailwindConfig.theme.treo.themes);

    // Get the 'screens' config and build media queries from them
    let mediaQueries = '';
    const screens = tailwindConfig.theme.screens;
    Object.entries(screens).forEach(([key, value]) =>
    {
        mediaQueries = `${mediaQueries} '${key}': '${buildMediaQuery(value)}',`;
    });
    mediaQueries = `{ ${mediaQueries} }`;

    // Return the extracted config
    return `
        breakpoints: ${mediaQueries},
        themes: ${themes}
    `;
};
