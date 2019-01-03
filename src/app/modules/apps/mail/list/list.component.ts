import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'mail-list',
    templateUrl  : './list.component.html',
    styleUrls    : ['./list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MailListComponent
{
    @Input()
    content: any;

    constructor()
    {
    }
}
