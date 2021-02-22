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
                color: 'var(--treo-mat-icon) !important'
            },
            '.text-default'                                          : {
                color: 'var(--treo-text-default) !important'
            },
            '.text-secondary'                                        : {
                color: 'var(--treo-text-secondary) !important'
            },
            '.text-hint'                                             : {
                color: 'var(--treo-text-hint) !important'
            },
            '.text-disabled'                                         : {
                color: 'var(--treo-text-disabled) !important'
            },
            '.divider'                                               : {
                color: 'var(--treo-divider) !important'
            },
            '.bg-card'                                               : {
                backgroundColor: 'var(--treo-bg-card) !important'
            },
            '.bg-default'                                            : {
                backgroundColor: 'var(--treo-bg-default) !important'
            },
            '.bg-dialog'                                             : {
                backgroundColor: 'var(--treo-bg-dialog) !important'
            },
            [`.dark .${e(`dark:mat-icon`)}`]                         : {
                color: 'var(--treo-mat-icon) !important'
            },
            [`.dark .${e(`dark:text-default`)}`]                     : {
                color: 'var(--treo-text-default) !important'
            },
            [`.dark .${e(`dark:text-secondary`)}`]                   : {
                color: 'var(--treo-text-secondary) !important'
            },
            [`.dark .${e(`dark:text-hint`)}`]                        : {
                color: 'var(--treo-text-hint) !important'
            },
            [`.dark .${e(`dark:text-disabled`)}`]                    : {
                color: 'var(--treo-text-disabled) !important'
            },
            [`.dark .${e(`dark:divider`)}`]                          : {
                color: 'var(--treo-divider) !important'
            },
            [`.dark .${e(`dark:bg-card`)}`]                          : {
                backgroundColor: 'var(--treo-bg-card) !important'
            },
            [`.dark .${e(`dark:bg-default`)}`]                       : {
                backgroundColor: 'var(--treo-bg-default) !important'
            },
            [`.dark .${e(`dark:bg-dialog`)}`]                        : {
                backgroundColor: 'var(--treo-bg-dialog) !important'
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
