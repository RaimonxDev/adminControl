import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsmMediaWatcherService } from '@assembly';

@Component({
    selector   : 'mailbox',
    templateUrl: './mailbox.component.html',
    styleUrls  : ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit, OnDestroy
{
    @ViewChild('drawer')
    drawer: MatDrawer;

    isDrawerPersistent: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmMediaWatcherService} _asmMediaWatcherService
     */
    constructor(
        private _asmMediaWatcherService: AsmMediaWatcherService
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
        // Subscribe to media changes
        this._asmMediaWatcherService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {

                // Calculate if drawer should be persistent
                this.isDrawerPersistent = this._shouldDrawerPersist('gt-md');
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

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Calculate if drawer should be persistent
     *
     * @param breakpoint
     * @private
     */
    private _shouldDrawerPersist(breakpoint): boolean
    {
        return this._asmMediaWatcherService.isActive(breakpoint);
    }
}
