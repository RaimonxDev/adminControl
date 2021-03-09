import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'fullwidth-tabs-content-scroll',
    templateUrl  : './tabs.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FullwidthTabsContentScrollComponent
{
    selectedIndex: number = 0;

    /**
     * Constructor
     */
    constructor()
    {
    }
}
