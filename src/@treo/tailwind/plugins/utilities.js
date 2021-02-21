const plugin = require('tailwindcss/plugin');

const utilities = plugin(({addBase}) =>
{
    addBase(
        {
            '.mat-icon'      : {
                color: 'var(--treo-mat-icon) !important'
            },
            '.text-default'  : {
                color: 'var(--treo-text-default) !important'
            },
            '.text-secondary': {
                color: 'var(--treo-text-secondary) !important'
            },
            '.text-hint'     : {
                color: 'var(--treo-text-hint) !important'
            },
            '.text-disabled' : {
                color: 'var(--treo-text-disabled) !important'
            },
            '.divider'       : {
                color: 'var(--treo-divider) !important'
            },
            '.bg-card'       : {
                backgroundColor: 'var(--treo-bg-card) !important'
            },
            '.bg-default'    : {
                backgroundColor: 'var(--treo-bg-default) !important'
            },
            '.bg-dialog'     : {
                backgroundColor: 'var(--treo-bg-dialog) !important'
            }
        },
        ['dark']
    );

    addBase(
        {
            '.bg-hover': {
                backgroundColor: 'var(--treo-bg-hover) !important;'
            }
        },
        ['dark', 'hover', 'group-hover']
    );
});

module.exports = utilities;
