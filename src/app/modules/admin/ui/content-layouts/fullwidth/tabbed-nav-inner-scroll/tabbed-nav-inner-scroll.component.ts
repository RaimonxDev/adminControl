import { Component } from '@angular/core';

@Component({
    selector   : 'fullwidth-tabbed-nav-inner-scroll',
    templateUrl: './tabbed-nav-inner-scroll.component.html',
    styleUrls  : ['./tabbed-nav-inner-scroll.component.scss']
})
export class FullwidthTabbedNavInnerScrollComponent
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
            }
        ];
    }

}
