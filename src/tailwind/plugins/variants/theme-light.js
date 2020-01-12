const plugin = require('tailwindcss/plugin');

/**
 * Adds 'light' variant
 */
module.exports = plugin(({addVariant, e}) => {

    const variant = ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
            return `[class*="theme-light"].${e(`light${separator}${className}`)}, [class*="theme-light"] .${e(`light${separator}${className}`)}`
        })
    };

    addVariant('light', variant);
});
