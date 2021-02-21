const plugin = require('tailwindcss/plugin');

const utilities = plugin(({addBase}) =>
{
    addBase(
        {
            '.mat-icon'      : {
                color: 'var(--treo-mat-icon)'
            },
            '.text-default'  : {
                color: 'var(--treo-text-default)'
            },
            '.text-secondary': {
                color: 'var(--treo-text-secondary)'
            },
            '.text-hint'     : {
                color: 'var(--treo-text-hint)'
            },
            '.text-disabled' : {
                color: 'var(--treo-text-disabled)'
            },
            '.divider'       : {
                color: 'var(--treo-divider)'
            },
            '.bg-card'       : {
                backgroundColor: 'var(--treo-bg-card)'
            },
            '.bg-default'    : {
                backgroundColor: 'var(--treo-bg-default)'
            },
            '.bg-dialog'     : {
                backgroundColor: 'var(--treo-bg-dialog)'
            }
        },
        ['dark']
    );

    addBase(
        {
            '.bg-hover': {
                backgroundColor: 'var(--treo-bg-hover)'
            }
        },
        ['dark', 'hover', 'group-hover']
    );
});

module.exports = utilities;
