import { Component } from '@angular/core';

@Component({
    selector   : 'fullwidth-tabs',
    templateUrl: './tabs.component.html',
    styleUrls  : ['./tabs.component.scss']
})
export class FullwidthTabsComponent
{
    scrollMode: string;

    constructor()
    {
        // Set the defaults
        this.scrollMode = 'normal';
    }
}
