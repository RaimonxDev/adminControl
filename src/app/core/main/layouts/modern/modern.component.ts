import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsmMediaWatcherService, AsmNavigationService } from '@assembly';

@Component({
    selector     : 'layout[type="modern"]',
    templateUrl  : './modern.component.html',
    styleUrls    : ['./modern.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ModernVerticalLayoutComponent implements OnInit, OnDestroy
{
    isScreenSmall: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmMediaWatcherService} _asmMediaWatcherService
     * @param {AsmNavigationService} _asmNavigationService
     */
    constructor(
        private _asmMediaWatcherService: AsmMediaWatcherService,
        private _asmNavigationService: AsmNavigationService
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
        this._asmMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((matchingAliases) => {

                // Check if the breakpoint is 'lt-md'
                this.isScreenSmall = matchingAliases.includes('lt-md');
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
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle navigation
     *
     * @param key
     */
    toggleNavigation(key): void
    {
        // Get the navigation
        const navigation = this._asmNavigationService.getComponent(key);

        if ( navigation )
        {
            // Toggle the opened status
            navigation.toggle();
        }
    }
}
