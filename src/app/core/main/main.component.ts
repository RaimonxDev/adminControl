import { Component, Inject, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { MatRadioChange } from '@angular/material/radio';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AsmDrawerService } from '@assembly';
import { AppConfig, Theme } from 'app/config/app';
import { Layout } from 'app/core/main/layouts/layouts.types';
import { ConfigService } from 'app/core/config/config.service';

@Component({
    selector     : 'main',
    templateUrl  : './main.component.html',
    styleUrls    : ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit, OnDestroy
{
    config: AppConfig;
    layout: Layout;
    theme: Theme;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {AsmDrawerService} _asmDrawerService
     * @param {ConfigService} _configService
     * @param {DOCUMENT} _document
     * @param {DomSanitizer} _domSanitizer
     * @param {MatIconRegistry} _matIconRegistry
     * @param {Renderer2} _renderer2
     * @param {Router} _router
     * @param {Platform} _platform
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _asmDrawerService: AsmDrawerService,
        private _configService: ConfigService,
        @Inject(DOCUMENT) private _document: any,
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry,
        private _platform: Platform,
        private _renderer2: Renderer2,
        private _router: Router
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
        this._configService.config$
            .pipe(
                filter((config) => config !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((config) => {

                // Store the config
                this.config = config;

                // Store the theme
                this.theme = config.theme;

                // Update the selected theme class name on body
                const themeName = 'asm-theme-' + config.theme;
                this._document.body.classList.forEach((className) => {
                    if ( className.startsWith('asm-theme-') && className !== themeName )
                    {
                        this._document.body.classList.remove(className);
                        this._document.body.classList.add(themeName);
                        return;
                    }
                });

                // Update the layout
                this._updateLayout();
            });

        // Subscribe to NavigationEnd event to update the layout on route changes
        this._router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {
            this._updateLayout();
        });

        // Add 'is-mobile' class to the body if the platform is mobile
        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this._document.body.classList.add('is-mobile');
        }

        // Register icon sets
        this._matIconRegistry.addSvgIconSet(this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-twotone.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('mat_outline', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-outline.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('iconsmind', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/iconsmind.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('dripicons', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/dripicons.svg'));
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
     * Update the selected layout
     */
    private _updateLayout(): void
    {
        // Get the current activated route
        let route = this._activatedRoute;
        while ( route.firstChild )
        {
            route = route.firstChild;
        }

        // 1. Set the layout from the config
        this.layout = this.config.layout;

        // 2. Get the query parameter from the current route and
        // set the layout and save the layout to the config
        const layoutFromQueryParam = (route.snapshot.queryParamMap.get('layout') as Layout);
        if ( layoutFromQueryParam )
        {
            this.config.layout = this.layout = layoutFromQueryParam;
        }

        // 3. Iterate through the paths and change the layout as we find
        // a config for it.
        //
        // The reason we do this is that there might be empty grouping
        // paths or componentless routes along the path. Because of that,
        // we cannot just assume that the layout configuration will be
        // in the last path's config or in the first path's config.
        //
        // So, we get all the paths that matched starting from root all
        // the way to the current activated route, walk through them one
        // by one and change the layout as we find the layout config. This
        // way, layout configuration can live anywhere within the path and
        // we won't miss it.
        //
        // Also, this will allow overriding the layout in any time so we
        // can have different layouts for different routes.
        const paths = route.pathFromRoot;
        paths.forEach((path) => {

            // Check if there is a 'layout' data
            if ( path.routeConfig && path.routeConfig.data && path.routeConfig.data.layout )
            {
                // Set the layout
                this.layout = path.routeConfig.data.layout;
            }
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set the layout on the config
     *
     * @param change
     */
    setLayout(change: MatRadioChange): void
    {
        this._configService.config = {layout: change.value};
    }

    /**
     * Set the theme on the config
     *
     * @param change
     */
    setTheme(change: MatSlideToggleChange): void
    {
        this._configService.config = {theme: change.checked ? 'dark' : 'light'};
    }
}
