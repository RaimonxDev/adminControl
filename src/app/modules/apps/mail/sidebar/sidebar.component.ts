import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { MailService } from 'app/modules/apps/mail/mail.service';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
    selector     : 'mail-sidebar',
    templateUrl  : './sidebar.component.html',
    styleUrls    : ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MailSidebarComponent implements OnInit, OnDestroy
{
    systemLabels: any[];
    userLabels: any[];

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MailService} _mailService
     */
    constructor(
        private _mailService: MailService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the system labels data updates
        this._mailService
            .onSystemLabelsUpdated
            .pipe(
                filter((data) => {
                    return data !== null;
                }),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((data) => {
                this.systemLabels = data.systemLabels;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
