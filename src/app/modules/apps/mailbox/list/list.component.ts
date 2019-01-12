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
    pagination: any;

    @Input()
    selectedMail: any;

    @Output()
    mailSelected: EventEmitter<any>;

    @Output()
    pageChanged: EventEmitter<any>;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.mailSelected = new EventEmitter();
        this.pageChanged = new EventEmitter();
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

    /**
     * Emits the page changed event
     *
     * @param page
     */
    onPageChanged(page): void
    {
        this.pageChanged.emit(page);
    }

}
