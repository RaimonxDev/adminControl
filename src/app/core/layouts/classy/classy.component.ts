import { Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { AsmConfig, AsmNavigation } from '@assembly/types';
import { AsmConfigService } from '@assembly/services/config.service';
import { AsmDrawerService } from '@assembly/components/drawer/drawer.service';
import { AsmMediaWatcherService } from '@assembly/services/media-watcher.service';
import { AsmNavigationService } from '@assembly/components/navigation/navigation.service';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector     : 'classy-layout',
    templateUrl  : './classy.component.html',
    styleUrls    : ['./classy.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ClassyLayoutComponent implements OnInit, OnDestroy
{
    asmConfig: AsmConfig;
    navigation: AsmNavigation[];
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
     * @param {AsmDrawerService} _asmDrawerService
     * @param {AsmMediaWatcherService} _asmMediaWatcherService
     * @param {AsmNavigationService} _asmNavigationService
     * @param {AuthService} _authService
     */
    constructor(
        private _asmConfigService: AsmConfigService,
        private _asmDrawerService: AsmDrawerService,
        private _asmMediaWatcherService: AsmMediaWatcherService,
        private _asmNavigationService: AsmNavigationService,
        private _authService: AuthService
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
        this._asmNavigationService.setCurrent('default');

        // Set the layout's default options
        this._asmConfigService.defaultConfig = {
            layout: {
                options: {
                    navigation: {
                        hidden: false,
                        theme : {
                            background: 'asm-black',
                            isDark    : true
                        }
                    },
                    header    : {
                        background: 'asm-white',
                        hidden    : false,
                        fixed     : false
                    },
                    footer    : {
                        background: 'asm-navy-900',
                        hidden    : false,
                        fixed     : false
                    }
                }
            }
        };

        // Subscribe to config changes
        this._asmConfigService.onConfigChanged
            .pipe(
                takeUntil(this._unsubscribeAll),
                filter((config) => config !== null)
            )
            .subscribe((config: AsmConfig) => {

                // Update the asmConfig from the config
                this.asmConfig = config;

                // Update the fixedHeader property
                this.fixedHeader = this.asmConfig.layout.options.header.fixed;

                // Update the fixedFooter property
                this.fixedFooter = this.asmConfig.layout.options.footer.fixed;
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
     * Logout
     */
    logout(): void
    {
        this._authService.logout();
    }

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
