import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AsmConfig, AsmConfigService } from '@assembly';

@Component({
    selector     : 'layout[type="empty"]',
    templateUrl  : './empty.component.html',
    styleUrls    : ['./empty.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EmptyLayoutComponent implements OnInit, OnDestroy
{
    asmConfig: AsmConfig;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmConfigService} _asmConfigService
     */
    constructor(
        private _asmConfigService: AsmConfigService
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
        // Set the layout's default options
        this._asmConfigService.defaultConfig = {
            layout: {
                options: {
                    navigation: {
                        hidden: false,
                        theme : {
                            background: 'blue-grey-50 light-theme'
                        }
                    },
                    header    : {
                        background: 'white light-theme',
                        hidden    : false,
                        fixed     : false
                    },
                    footer    : {
                        background: 'white light-theme',
                        hidden    : false,
                        fixed     : false
                    }
                }
            }
        };

        // Subscribe to config changes
        this._asmConfigService.onConfigChanged
            .pipe(
                filter((config) => config !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((config: AsmConfig) => {

                // Update the asmConfig from the config
                this.asmConfig = config;
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
