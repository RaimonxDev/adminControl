import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'mailbox-list',
    templateUrl    : './list.component.html',
    styleUrls      : ['./list.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MailboxListComponent
{
    @Input()
    mails: any;

    @Input()
    content: any;

    @Output()
    mailSelected: EventEmitter<any>;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.mailSelected = new EventEmitter();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Emits the mail selected event
     *
     * @param mailId
     */
    onMailSelected(mailId): void
    {
        this.mailSelected.emit(mailId);
    }
}
