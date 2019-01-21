import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'mailbox-sidebar',
    templateUrl    : './sidebar.component.html',
    styleUrls      : ['./sidebar.component.scss'],
    encapsulation  : ViewEncapsulation.None
})
export class MailboxSidebarComponent
{
    @Input()
    filters: any;

    @Input()
    folders: any;

    @Input()
    labels: any;

    /**
     * Constructor
     */
    constructor()
    {
    }
}
