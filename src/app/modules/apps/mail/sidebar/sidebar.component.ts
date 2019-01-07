import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MailService } from 'app/modules/apps/mail/mail.service';

@Component({
    selector     : 'mail-sidebar',
    templateUrl  : './sidebar.component.html',
    styleUrls    : ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MailSidebarComponent implements OnInit, OnDestroy
{
    systemLabels$: Observable<any>;
    userLabels$: Observable<any>;

    /**
     * Constructor
     *
     * @param {MailService} _mailService
     */
    constructor(
        private _mailService: MailService
    )
    {

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the labels
        this.userLabels$ = this._mailService.userLabels;
        this.systemLabels$ = this._mailService.systemLabels;
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {

    }
}
