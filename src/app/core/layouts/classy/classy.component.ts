import { Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { from, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import axios, { AxiosInstance } from 'axios';
import { AsmConfig, AsmConfigService, AsmDrawerService, AsmMediaWatcherService, AsmNavigation, AsmNavigationService } from '@assembly';

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
    isScreenSmall: boolean;
    navigation: AsmNavigation[];
    searchResults: any[] | null;

    @HostBinding('class.fixed-header')
    fixedHeader: boolean;

    @HostBinding('class.fixed-footer')
    fixedFooter: boolean;

    // Private
    private _axios: AxiosInstance;
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
        this._axios = axios;
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.searchResults = null;
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
                filter((config) => config !== null),
                takeUntil(this._unsubscribeAll)
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
     * On search
     *
     * @param value
     */
    onSearch(value): void
    {
        from(this._axios.post('api/search', {query: value}))
            .subscribe((response) => {
                this.searchResults = response.data.results;
            });
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
