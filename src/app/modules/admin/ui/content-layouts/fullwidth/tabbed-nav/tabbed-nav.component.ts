import { Component } from '@angular/core';

@Component({
    selector   : 'fullwidth-tabbed-nav',
    templateUrl: './tabbed-nav.component.html',
    styleUrls  : ['./tabbed-nav.component.scss']
})
export class FullwidthTabbedNavComponent
{
    navLinks: any[];

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.navLinks = [
            {
                path : 'tab-1',
                title: 'First'
            },
            {
                path : 'tab-2',
                title: 'Second'
            },
            {
                path : 'tab-3',
                title: 'Third'
            },
            {
                path : 'tab-4',
                title: 'Fourth'
            },
            {
                path : 'tab-5',
                title: 'Fifth'
            },
            {
                path : 'tab-6',
                title: 'Sixth'
            }
        ];
    }

}
