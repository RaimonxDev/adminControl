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
    content: any;

    @Input()
    mails: any;

    @Input()
    selectedMail: any;

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
     * @param mail
     */
    onMailSelected(mail): void
    {
        this.mailSelected.emit(mail);
    }
}
