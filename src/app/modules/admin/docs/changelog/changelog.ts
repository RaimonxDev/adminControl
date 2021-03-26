import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector       : 'changelog',
    templateUrl    : './changelog.html',
    styles         : [''],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangelogComponent
{
    changelog: any[] = [

        // v2.0.0
        {
            version    : 'v2.0.0',
            releaseDate: 'WIP/TBA',
            changes    : [
                {
                    type: 'Breaking Changes',
                    list: [
                        'This is the new major version of the Treo and it\'s completely different from 1.x versions with no upgrade path'
                    ]
                },
                {
                    type: 'Features',
                    list: [
                        'Re-wrote the entire template from scratch using Tailwind',
                        'Removed 99% of the SCSS styles in favor of Tailwind',
                        'Integrated Angular Material theming with Tailwind'
                    ]
                },
                {
                    type: 'Improvements',
                    list: [
                        '(Dependencies) Updated Angular & Angular Material',
                        '(Dependencies) Updated Tailwind',
                        '(Dependencies) Updated various other packages'
                    ]
                }
            ]
        },

        // v1.1.0
        /*{
            version    : 'v1.1.0',
            releaseDate: 'WIP/TBA',
            changes    : [
                {
                    type: 'Breaking Changes',
                    list: [
                        '(@treo/TreoMessage) Changed the default style to \'soft\'',
                        '(@treo/TreoMessage) Default icons are now using Heroicons Solid icons'
                    ]
                },
                {
                    type: 'Bug Fixes',
                    list: [
                        '(@treo/TreoDrawer) Left positioned \'side\' mode drawer doesn\'t toggle open/close correctly',
                        '(@treo/TreoVerticalNavigation) Aside type navigation items must only check its \'basic\' type children to mark itself as active',
                        '(apps/contacts) When clicking on a contact while contact details sidebar closing breaks the app',
                        '(apps/tasks) When clicking on a task while task details sidebar closing breaks the app'
                    ]
                },
                {
                    type: 'Features',
                    list: [
                        '(@treo/TreoMessage) Added a new \'soft\' style',
                        '(docs) Moved the documentation into the Demo app for better accessibility and visibility'
                    ]
                },
                {
                    type: 'Improvements',
                    list: [
                        '(Dependencies) Updated Angular & Angular Material',
                        '(Dependencies) Updated Tailwind',
                        '(Dependencies) Updated various other packages',
                        '(@treo/MockAPI) PUT requests are replaced with POST to better follow REST guidelines',
                        '(@treo/TreoMessage) Better icon/text alignment for different sized icons',
                        '(pages/help-center) Better styling on home page grid items & better overall spacing',
                        '(ui/forms) Updated form examples to showcase all available form field types',
                        '(ui/helpers) Improved the \'.rich-text\' utility class to align it better with Tailwind\'s \'.prose prose-sm\' utility',
                        '(ui/icons) Updated Material and Heroicons icon packs'
                    ]
                }
            ]
        },*/

        // v1.0.2
        {
            version    : 'v1.0.2',
            releaseDate: 'June 27, 2020',
            changes    : [
                {
                    type: 'Bug Fixes',
                    list: [
                        '(@treo/TreoVerticalNavigation) Aside navigation item is not highlighting if one of its children is active',
                        '(@treo/TreoVerticalNavigation) Aside is not closing after navigating to a route',
                        '(@treo/overrides/angular-material) MatSelect placeholder is not showing because of its text color',
                        '(layouts) Do not use layouts directly as entry points as it breaks the theming'
                    ]
                },
                {
                    type: 'Features',
                    list: [
                        '(theming) Added "auto" mode to automatically switch to dark or light theme based on user\'s OS settings'
                    ]
                },
                {
                    type: 'Improvements',
                    list: [
                        '(Dependencies) Updated Angular & Angular Material to v10 (follow official "ng update" guide to update your own code)',
                        '(Dependencies) Updated various other packages',
                        '(Dependencies) Replaced "lodash" with "lodash-es"',
                        '(@treo/TreoVerticalNavigation) Better contrast on active and hover backgrounds',
                        '(@treo/TreoVerticalNavigation) Added "active" property to force the active state on navigation items',
                        '(@treo/TreoHorizontalNavigation) Added "active" property to force the active state on navigation items',
                        '(global) Re-ordered constructor parameters alphabetically - OCD yay!'
                    ]
                }
            ]
        },

        // v1.0.1
        {
            version    : 'v1.0.1',
            releaseDate: 'May 04, 2020',
            changes    : [
                {
                    type: 'Features',
                    list: [
                        '(icons) Added `heroicons_solid` icons'
                    ]
                },
                {
                    type: 'Improvements',
                    list: [
                        '(Dependencies) Updated Angular, Angular Material and couple other dependencies',
                        '(@treo) Updated Tailwind plugins to be compatible with Tailwind 1.4.x',
                        '(@treo/TreoHorizontalNavigation) Highlight the active menu item',
                        '(@treo/TreoVerticalNavigation) Better hover & active states for better accessibility',
                        '(@treo/overrides/angular-material) Added `shadow-sm` TailwindCSS shadow to all form fields for better look',
                        '(@treo/overrides/quill) Added max-height to the editor so it can scroll correctly and some style tweaks',
                        '(dashboards/analytics) Disable animations for line charts',
                        '(dashboards/finance) Used normal fill on the main chart and removed SVGFill fix/hack',
                        '(apps/mailbox) Tweaked the compose dialog',
                        '(apps/ecommerce) Added `shadow-sm` to the tags container on product edit form to match it with other form fields',
                        '(pages/pricing) Increased the main title font size on all pricing pages',
                        '(layouts) Removed text & bg colors from TreoVerticalNavigation component as they are now hard coded into the component',
                        '(layouts/futuristic) Better navigation sidebar styles',
                        '(ui/icons/heroicons) Renamed `heroicons` to `heroicons_outline`',
                        '(mock-api/calendar) Navigation mock-api modifications for better examples',
                        '(theming) Use indigo-600 as primary, cool-gray-800 as accent colors'
                    ]
                }
            ]
        },

        // v1.0.0
        {
            version    : 'v1.0.0',
            releaseDate: 'April 08, 2020',
            changes    : [
                {
                    type: 'Initial Release',
                    list: [
                        'Initial release of Treo'
                    ]
                }
            ]
        }
    ];

    /**
     * Constructor
     */
    constructor()
    {
    }
}
