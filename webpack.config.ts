import * as path from 'path';
import * as webpack from 'webpack';
import { CustomWebpackBrowserSchema } from '@angular-builders/custom-webpack';

module.exports = (config: webpack.Configuration, options: CustomWebpackBrowserSchema) => {

    // -----------------------------------------------------------------------------------------------------
    // @ Patch all PostCSS loader plugins
    // -----------------------------------------------------------------------------------------------------
    const plugins = [
        require('tailwindcss')({config: path.resolve(__dirname, 'tailwind.config.js')})
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

    // -----------------------------------------------------------------------------------------------------
    // @ Add a separate rule for 'styles/tailwind.scss' so we can compile before running SASS on it
    // -----------------------------------------------------------------------------------------------------
    config.module.rules.push(
        {
            include: [
                path.resolve(__dirname, 'src/styles/tailwind.scss')
            ],
            test   : /\.scss$|\.sass$/,
            use    : [
                {
                    loader : 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                require('tailwindcss')({config: path.resolve(__dirname, 'tailwind.config.js')}),
                                require('autoprefixer')
                            ]
                        }
                    }
                }
            ]
        }
    );

    // -----------------------------------------------------------------------------------------------------
    // @ Ignore watching Tailwind related files to prevent infinite loops
    // -----------------------------------------------------------------------------------------------------
    config.plugins.push(
        new webpack.WatchIgnorePlugin([
            path.resolve(__dirname, 'tailwind.config.js'),
            path.resolve(__dirname, 'src/@treo/tailwind/plugins/treo.js')
        ])
    );

    return config;
};
