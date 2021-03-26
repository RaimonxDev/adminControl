import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'fullwidth-tabs-normal-scroll',
    templateUrl  : './tabs.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FullwidthTabsNormalScrollComponent
{
    selectedIndex: number = 0;

    /**
     * Constructor
     */
    constructor()
    {
    }
}
