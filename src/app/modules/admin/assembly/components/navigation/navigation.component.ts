import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'navigation',
    templateUrl  : './navigation.component.html',
    styleUrls    : ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavigationComponent
{
    codeExamples: any;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.codeExamples = {

            // language=TypeScript
            storingNavData: `
                // Get navigation data from a database or from a file
                const navigationData = {...};

                // Store navigation data as the 'default' navigation
                this.asmNavigationService.storeNavigation('default', navigationData);
            `,

            // language=TypeScript
            settingCurrentNav: `
                // Set the 'default' as the current navigation
                this.asmNavigationService.setCurrentNavigation('default');
            `,

            // language=TypeScript
            storingMultipleNavData: `
                // Get navigation data from a database or from a file
                const adminNavigationData = {...};
                const userNavigationData = {...};

                // Store multiple navigation data
                this.asmNavigationService.storeNavigation('admin', adminNavigationData);
                this.asmNavigationService.storeNavigation('user', userNavigationData);
            `,

            // language=TypeScript
            settingMultipleNav: `
                // If the current user is an admin...
                if ( this.userService.isAdmin )
                {
                    // Set the 'admin' as the current navigation
                    this.asmNavigationService.setCurrentNavigation('admin');
                }
                // If the current user is not an admin...
                else
                {
                    // Set the 'user' as the current navigation
                    this.asmNavigationService.setCurrentNavigation('user');
                }
            `,

            // language=HTML
            component: `
                <asm-vertical-navigation [name]="'leftNavigation'"
                                         [appearance]="'classic'"
                                         [mode]="isScreenSmall ? 'over' : 'side'"
                                         [position]="'left'"
                                         [autoCollapse]="true"
                                         [opened]="!isScreenSmall"
                                         [showTooltips]="false"
                                         [transparentOverlay]="false">
                </asm-vertical-navigation>
            `

        };
    }

}
