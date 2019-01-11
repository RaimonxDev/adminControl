import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'mailbox-sidebar',
    templateUrl    : './sidebar.component.html',
    styleUrls      : ['./sidebar.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MailboxSidebarComponent
{
    @Input()
    folders: any;

    @Input()
    filters: any;

    @Input()
    labels: any;

    /**
     * Constructor
     */
    constructor()
    {
    }
}
