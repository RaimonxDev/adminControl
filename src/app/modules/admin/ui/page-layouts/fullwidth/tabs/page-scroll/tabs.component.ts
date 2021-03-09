import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'fullwidth-tabs-page-scroll',
    templateUrl  : './tabs.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FullwidthTabsPageScrollComponent
{
    selectedIndex: number = 0;

    /**
     * Constructor
     */
    constructor()
    {
    }
}
