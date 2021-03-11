const plugin = require('tailwindcss/plugin');

const utilities = plugin(({
    addBase,
    e
}) =>
{
    /*
    * Add base styles. These are very important for everything to look
    * correct. We are adding these to the 'base' layer because they must
    * be defined before pretty much everything else. Since 'addBase' doesn't
    * have variant wrapping functionality, we define the variants manually
    * as well.
    */
    addBase(
        {
            '.mat-icon'                                              : {
                '--tw-text-opacity': '1 !important',
                color              : 'rgba(var(--treo-mat-icon-rgb), var(--tw-text-opacity)) !important'
            },
            '.text-default'                                          : {
                '--tw-text-opacity': '1 !important',
                color              : 'rgba(var(--treo-text-default-rgb), var(--tw-text-opacity)) !important'
            },
            '.text-secondary'                                        : {
                '--tw-text-opacity': '1 !important',
                color              : 'rgba(var(--treo-text-secondary-rgb), var(--tw-text-opacity)) !important'
            },
            '.text-hint'                                             : {
                '--tw-text-opacity': '1 !important',
                color              : 'rgba(var(--treo-text-hint-rgb), var(--tw-text-opacity)) !important'
            },
            '.text-disabled'                                         : {
                '--tw-text-opacity': '1 !important',
                color              : 'rgba(var(--treo-text-disabled-rgb), var(--tw-text-opacity)) !important'
            },
            '.divider'                                               : {
                color: 'var(--treo-divider) !important'
            },
            '.bg-card'                                               : {
                '--tw-bg-opacity': '1 !important',
                backgroundColor  : 'rgba(var(--treo-bg-card-rgb), var(--tw-bg-opacity)) !important'
            },
            '.bg-default'                                            : {
                '--tw-bg-opacity': '1 !important',
                backgroundColor  : 'rgba(var(--treo-bg-default-rgb), var(--tw-bg-opacity)) !important'
            },
            '.bg-dialog'                                             : {
                '--tw-bg-opacity': '1 !important',
                backgroundColor  : 'rgba(var(--treo-bg-dialog-rgb), var(--tw-bg-opacity)) !important'
            },
            '.ring-bg-default'                                               : {
                '--tw-ring-opacity': '1 !important',
                '--tw-ring-color'  : 'rgba(var(--treo-bg-default-rgb), var(--tw-ring-opacity)) !important'
            },
            '.ring-bg-card'                                               : {
                '--tw-ring-opacity': '1 !important',
                '--tw-ring-color'  : 'rgba(var(--treo-bg-card-rgb), var(--tw-ring-opacity)) !important'
            },
            [`.dark .${e(`dark:mat-icon`)}`]                         : {
                '--tw-text-opacity': '1 !important',
                color              : 'rgba(var(--treo-mat-icon-rgb), var(--tw-text-opacity)) !important'
            },
            [`.dark .${e(`dark:text-default`)}`]                     : {
                '--tw-text-opacity': '1 !important',
                color              : 'rgba(var(--treo-text-default-rgb), var(--tw-text-opacity)) !important'
            },
            [`.dark .${e(`dark:text-secondary`)}`]                   : {
                '--tw-text-opacity': '1 !important',
                color              : 'rgba(var(--treo-text-secondary-rgb), var(--tw-text-opacity)) !important'
            },
            [`.dark .${e(`dark:text-hint`)}`]                        : {
                '--tw-text-opacity': '1 !important',
                color              : 'rgba(var(--treo-text-hint-rgb), var(--tw-text-opacity)) !important'
            },
            [`.dark .${e(`dark:text-disabled`)}`]                    : {
                '--tw-text-opacity': '1 !important',
                color              : 'rgba(var(--treo-text-disabled-rgb), var(--tw-text-opacity)) !important'
            },
            [`.dark .${e(`dark:divider`)}`]                          : {
                color: 'var(--treo-divider) !important'
            },
            [`.dark .${e(`dark:bg-card`)}`]                          : {
                '--tw-bg-opacity': '1 !important',
                backgroundColor  : 'rgba(var(--treo-bg-card-rgb), var(--tw-bg-opacity)) !important'
            },
            [`.dark .${e(`dark:bg-default`)}`]                       : {
                '--tw-bg-opacity': '1 !important',
                backgroundColor  : 'rgba(var(--treo-bg-default-rgb), var(--tw-bg-opacity)) !important'
            },
            [`.dark .${e(`dark:bg-dialog`)}`]                        : {
                '--tw-bg-opacity': '1 !important',
                backgroundColor  : 'rgba(var(--treo-bg-dialog-rgb), var(--tw-bg-opacity)) !important'
            },
            [`.dark .${e(`dark:ring-bg-card`)}`]                          : {
                '--tw-ring-opacity': '1 !important',
                '--tw-ring-color'  : 'rgba(var(--treo-bg-card-rgb), var(--tw-ring-opacity)) !important'
            },
            [`.dark .${e(`dark:ring-bg-default`)}`]                       : {
                '--tw-ring-opacity': '1 !important',
                '--tw-ring-color'  : 'rgba(var(--treo-bg-default-rgb), var(--tw-ring-opacity)) !important'
            },
            '.bg-hover'                                               : {
                backgroundColor: 'var(--treo-bg-hover) !important'
            },
            [`.${e(`hover:bg-hover`)}:hover`]                        : {
                backgroundColor: 'var(--treo-bg-hover) !important'
            },
            [`.group:hover .${e(`group-hover:bg-hover`)}`]           : {
                backgroundColor: 'var(--treo-bg-hover) !important'
            },
            [`.dark .${e(`dark:bg-hover`)}`]                         : {
                backgroundColor: 'var(--treo-bg-hover) !important'
            },
            [`.dark .${e(`dark:hover:bg-hover`)}:hover`]             : {
                backgroundColor: 'var(--treo-bg-hover) !important'
            },
            [`.dark .group:hover .${e(`dark:group-hover:bg-hover`)}`]: {
                backgroundColor: 'var(--treo-bg-hover) !important'
            }
        }
    );
});

module.exports = utilities;
