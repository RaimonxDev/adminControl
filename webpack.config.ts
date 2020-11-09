import * as path from 'path';
import * as webpack from 'webpack';
import { CustomWebpackBrowserSchema } from '@angular-builders/custom-webpack';

module.exports = async (config: webpack.Configuration, options: CustomWebpackBrowserSchema) => {

    // Options
    const enableTailwindForComponentStyles = true;

    // Is production?
    const isProd = config.mode === 'production';

    // Tailwind configuration
    const tailwindConfig = require(path.resolve(__dirname, 'tailwind.config.js'))(isProd);

    // -----------------------------------------------------------------------------------------------------
    // @ Enable Tailwind for component styles by patching all PostCSS loader plugins
    // -----------------------------------------------------------------------------------------------------
    if ( enableTailwindForComponentStyles )
    {
        const plugins = [
            require('tailwindcss')({config: tailwindConfig})
        ];

        // Find and loop through all scss rules
        const scssRules = config.module.rules.filter((r) => r.test.test('.scss'));
        for ( const scssRule of scssRules )
        {
            // Find the PostCSS loader
            const postcssLoader = scssRule.use.find((item) => item.loader && item.loader.includes('postcss-loader'));

            // Patch the plugins
            const currentPluginsFunction = postcssLoader.options.plugins;
            postcssLoader.options.plugins = (...args) => {
                const currentPlugins = currentPluginsFunction.apply(this, args);
                currentPlugins.splice(-1, 0, ...plugins);
                return currentPlugins;
            };
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Add a separate rule for certain files so they can be compiled by Tailwind before the SASS compiler
    // -----------------------------------------------------------------------------------------------------
    config.module.rules.push({
        include: [
            path.resolve(__dirname, 'src/@treo/styles/base.scss'),
            path.resolve(__dirname, 'src/@treo/styles/main.scss'),
            path.resolve(__dirname, 'src/@treo/styles/themes.scss'),
            path.resolve(__dirname, 'src/styles/tailwind.scss')
        ],
        test   : /\.scss$|\.sass$/,
        use    : [
            {
                loader : 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            require('postcss-import'),
                            require('tailwindcss')({config: tailwindConfig})
                        ]
                    }
                }
            }
        ]
    });

    // -----------------------------------------------------------------------------------------------------
    // @ Webpack Plugins
    // -----------------------------------------------------------------------------------------------------
    config.plugins.push(
        // Ignore watching related files to prevent triggering full re-compile when they modified
        new webpack.WatchIgnorePlugin([
            path.resolve(__dirname, 'tailwind.config.js'),
            path.resolve(__dirname, 'src/@treo/tailwind/plugins/treo.js'),
            path.resolve(__dirname, 'src/@treo/webpack/tailwind-config-extractor.js')
        ]),

        // Replace __TAILWIND_CONFIG__ from any file with extracted Tailwind configuration
        new webpack.DefinePlugin({
            __TAILWIND_CONFIG__: require(path.resolve(__dirname, 'src/@treo/tailwind/config-extractor'))({tailwindConfig})
        })
    );

    return config;
};
