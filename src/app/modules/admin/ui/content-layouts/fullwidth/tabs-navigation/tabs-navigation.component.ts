import { Component } from '@angular/core';

@Component({
    selector   : 'fullwidth-tabs-navigation',
    templateUrl: './tabs-navigation.component.html',
    styleUrls  : ['./tabs-navigation.component.scss']
})
export class FullwidthTabsNavigationComponent
{
    navLinks: any[] = [
        {
            path : 'tab-1',
            title: 'First Tab'
        },
        {
            path : 'tab-2',
            title: 'Second Tab'
        },
        {
            path : 'tab-3',
            title: 'Third Tab'
        }
    ];
    scrollMode: string = 'normal';

    /**
     * Constructor
     */
    constructor()
    {
    }
}
