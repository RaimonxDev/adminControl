import { Component } from '@angular/core';

@Component({
    selector   : 'fullwidth-basic',
    templateUrl: './basic.component.html',
    styleUrls  : ['./basic.component.scss']
})
export class FullwidthBasicComponent
{
    scrollMode: string;

    constructor()
    {
        // Set the defaults
        this.scrollMode = 'normal';
    }
}
