import { Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AsmConfig, AsmConfigService, AsmDrawerService, AsmMediaWatcherService, AsmNavigation, AsmNavigationService } from '@assembly';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector     : 'layout[type="classy"]',
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
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmConfigService} _asmConfigService
     * @param {AsmDrawerService} _asmDrawerService
     * @param {AsmMediaWatcherService} _asmMediaWatcherService
     * @param {AsmNavigationService} _asmNavigationService
     * @param {AuthService} _authService
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _asmConfigService: AsmConfigService,
        private _asmDrawerService: AsmDrawerService,
        private _asmMediaWatcherService: AsmMediaWatcherService,
        private _asmNavigationService: AsmNavigationService,
        private _authService: AuthService,
        private _httpClient: HttpClient
    )
    {
        // Set the private defaults
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
                            background: 'blue-grey-800 theme-dark'
                        }
                    },
                    header    : {
                        background: 'white theme-light',
                        hidden    : false,
                        fixed     : false
                    },
                    footer    : {
                        background: 'blue-grey-900 theme-dark',
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
            .pipe(takeUntil(this._unsubscribeAll))
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
        this._httpClient.post('api/search', {query: value})
            .subscribe((response: any) => {
                this.searchResults = response.results;
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
