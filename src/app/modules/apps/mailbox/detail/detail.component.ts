import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

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
    mail: any;

    constructor()
    {
    }
}
