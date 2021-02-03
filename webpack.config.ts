import * as path from 'path';
import * as webpack from 'webpack';
import { RuleSetLoader, RuleSetRule, RuleSetUseItem } from 'webpack';
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

        // Find all scss rules and loop through them if they exist
        const scssRules: RuleSetRule[] | [] = config.module?.rules.filter((rule: RuleSetRule) => rule.test instanceof RegExp ? rule.test.test('.scss') : false) ?? [];

        scssRules.forEach((scssRule: RuleSetRule) => {

            // Find the PostCSS loader
            const postcssLoader: RuleSetUseItem | undefined = (scssRule.use as RuleSetLoader[])
                .find((item) => (item as RuleSetLoader).loader?.includes('postcss-loader'));

            // Patch the plugins
            if ( postcssLoader && postcssLoader.options && (postcssLoader.options as any).postcssOptions.plugins )
            {
                const currentPluginsFunction = (postcssLoader.options as any).postcssOptions.plugins;
                (postcssLoader.options as any).postcssOptions.plugins = (...args: any) => {
                    const currentPlugins = currentPluginsFunction.apply(this, args);
                    currentPlugins.splice(-1, 0, ...plugins);
                    return currentPlugins;
                };
            }
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Add a separate rule for certain files so they can be compiled by Tailwind before the SASS compiler
    // -----------------------------------------------------------------------------------------------------
    config.module?.rules.push({
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
    config.plugins?.push(
        // Ignore watching related files to prevent triggering full re-compile when they modified
        new webpack.WatchIgnorePlugin([
            // path.resolve(__dirname, 'tailwind.config.js'),
            path.resolve(__dirname, 'src/@treo/tailwind/plugins/icon-size.js'),
            path.resolve(__dirname, 'src/@treo/tailwind/plugins/theming.js'),
            path.resolve(__dirname, 'src/@treo/tailwind/utils/config-extractor.js'),
            path.resolve(__dirname, 'src/@treo/tailwind/utils/generate-contrasts.js'),
            path.resolve(__dirname, 'src/@treo/tailwind/utils/generate-palette.js')
        ]),

        // Replace __TAILWIND_CONFIG__ from any file with extracted Tailwind configuration
        new webpack.DefinePlugin({
            __TAILWIND_CONFIG__: require(path.resolve(__dirname, 'src/@treo/tailwind/utils/config-extractor'))({tailwindConfig})
        }),

        // Replace __TREO_VERSION__ from any file with version number from package.json
        new webpack.DefinePlugin({
            __TREO_VERSION__: '"' + require(path.resolve(__dirname, 'package.json')).version + '"'
        })
    );

    return config;
};
