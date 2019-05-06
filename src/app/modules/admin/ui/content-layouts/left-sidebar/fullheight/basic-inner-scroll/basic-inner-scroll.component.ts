import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AsmMediaWatcherService } from '@assembly';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector   : 'left-sidebar-fullheight-basic-inner-scroll',
    templateUrl: './basic-inner-scroll.component.html',
    styleUrls  : ['./basic-inner-scroll.component.scss']
})
export class LeftSidebarFullheightBasicInnerScrollComponent implements OnInit, OnDestroy
{
    drawerMode: 'over' | 'side';
    drawerOpened: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _asmMediaWatcherService: AsmMediaWatcherService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.drawerMode = 'side';
        this.drawerOpened = true;
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

                // Set the drawerMode and drawerOpened if 'lt-lg' breakpoint is active
                if ( this._asmMediaWatcherService.isActive('lt-lg') )
                {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }
                else
                {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                }
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
