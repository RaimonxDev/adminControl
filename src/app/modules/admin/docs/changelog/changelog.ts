import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector       : 'changelog',
    templateUrl    : './changelog.html',
    styles         : [''],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangelogComponent
{
    changelog: any[];

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.changelog = [

            // v1.0.2
            {
                version    : 'v1.0.2',
                releaseDate: 'June 27, 2020',
                changes    : [
                    /*{
                        type: 'Breaking Changes',
                        list: [
                            'Some breaking changes',
                            'Some breaking changes',
                            'Some breaking changes'
                        ]
                    },*/
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
                            '(data/mock) Navigation data modifications for better examples',
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
    }
}
