import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'mailbox-detail',
    templateUrl    : './detail.component.html',
    styleUrls      : ['./detail.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MailboxDetailComponent
{
    @Input()
    labels: any;

    @Input()
    mail: any;

    @Output()
    mailUpdated: EventEmitter<any>;

    constructor()
    {
        // Set the defaults
        this.mailUpdated = new EventEmitter();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Emits the mail updated event
     */
    onMailUpdated(mail): void
    {
        this.mailUpdated.emit(mail);
    }

    /**
     * Toggle star
     */
    toggleStar(): void
    {
        // Update the mail object
        this.mail.starred = !this.mail.starred;

        // Trigger the emitter
        this.onMailUpdated(this.mail);
    }
}
