import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AsmConfig, AsmConfigService, AsmDrawerService, AsmMediaWatcherService, AsmNavigation, AsmNavigationService } from '@assembly';

@Component({
    selector     : 'modern-layout',
    templateUrl  : './modern.component.html',
    styleUrls    : ['./modern.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ModernLayoutComponent implements OnInit, OnDestroy
{
    asmConfig: AsmConfig;
    navigation: AsmNavigation[];
    isScreenSmall: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmConfigService} _asmConfigService
     * @param {AsmDrawerService} _asmDrawerService
     * @param {AsmMediaWatcherService} _asmMediaWatcherService
     * @param {AsmNavigationService} _asmNavigationService
     */
    constructor(
        private _asmConfigService: AsmConfigService,
        private _asmDrawerService: AsmDrawerService,
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
        // Set the current navigation
        this._asmNavigationService.setCurrentNavigation('default');

        // Set the layout's default options
        this._asmConfigService.defaultConfig = {
            colorTheme: 'theme-blue',
            layout    : {
                options: {
                    navigation: {
                        hidden: false,
                        theme : {
                            background: 'asm-white',
                            isDark    : false
                        }
                    },
                    header    : {
                        background: 'asm-navy-600',
                        hidden    : false
                    },
                    footer    : {
                        background: 'asm-navy-900',
                        hidden    : false
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle drawer
     *
     * @param key
     */
    toggleDrawer(key): void
    {
        // Get the drawer
        const drawer = this._asmDrawerService.get(key);

        if ( drawer )
        {
            // Toggle the opened status
            drawer.toggle();
        }
    }

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
