import { Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AsmConfigService } from '@assembly/services/config.service';
import { AsmMediaWatcherService } from '@assembly/services/media-watcher.service';

@Component({
    selector     : 'classic-layout',
    templateUrl  : './classic.component.html',
    styleUrls    : ['./classic.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ClassicLayoutComponent implements OnInit, OnDestroy
{
    asmConfig: any;
    isScreenSmall: boolean;

    @HostBinding('class.fixed-header')
    fixedHeader: boolean;

    @HostBinding('class.fixed-footer')
    fixedFooter: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmConfigService} _asmConfigService
     * @param {AsmMediaWatcherService} _asmMediaWatcherService
     */
    constructor(
        private _asmConfigService: AsmConfigService,
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
        // Subscribe to config changes
        this._asmConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {

                // Update the asmConfig from the config
                this.asmConfig = config;

                // Update the fixedHeader property
                this.fixedHeader = this.asmConfig.layout.header.fixed;

                // Update the fixedFooter property
                this.fixedFooter = this.asmConfig.layout.footer.fixed;
            });

        // Subscribe to media changes
        this._asmMediaWatcherService.onMediaChange
            .subscribe(() => {

                // Check if the breakpoint is 'lt-md'
                this.isScreenSmall = this._asmMediaWatcherService.isActive('lt-md');
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
