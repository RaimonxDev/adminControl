const plugin = require('tailwindcss/plugin');

/**
 * Adds 'dark' variant
 */
module.exports = plugin(({addVariant, e}) => {

    const variant = ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
            return `[class*="theme-dark"].${e(`dark${separator}${className}`)}, [class*="theme-dark"] .${e(`dark${separator}${className}`)}`
        })
    };

    addVariant('dark', variant);
});
