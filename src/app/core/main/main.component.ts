import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AsmConfig, AsmConfigService } from '@assembly';

@Component({
    selector     : 'main',
    templateUrl  : './main.component.html',
    styleUrls    : ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit, OnDestroy
{
    asmConfig: AsmConfig;
    layout: 'basic-vertical' | 'classic-vertical' | 'classy-vertical' | 'compact-vertical' | 'dense-vertical' | 'modern-vertical' | 'thin-vertical' | 'thin-light-vertical' |
        'empty';

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {AsmConfigService} _asmConfigService
     * @param {DOCUMENT} _document
     * @param {DomSanitizer} _domSanitizer
     * @param {MatIconRegistry} _matIconRegistry
     * @param {Router} _router
     * @param {Platform} _platform
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _asmConfigService: AsmConfigService,
        @Inject(DOCUMENT) private _document: any,
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry,
        private _platform: Platform,
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
        // Set the layout for the first time
        this._setLayout();

        // Subscribe to NavigationEnd event to set the layout on route changes
        this._router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {
            this._setLayout();
        });

        // Register icon sets
        this._matIconRegistry.addSvgIconSet(this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-twotone.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('mat_outline', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-outline.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('iconsmind', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/iconsmind.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('dripicons', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/dripicons.svg'));

        // Add 'is-mobile' class to the body if the platform is mobile
        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this._document.body.classList.add('is-mobile');
        }

        // Subscribe to config changes
        this._asmConfigService.onConfigChanged
            .pipe(
                filter((config) => config !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((config: AsmConfig) => {

                // Update the asmConfig from the config
                this.asmConfig = config;

                // Loop through body class names
                this._document.body.classList.forEach((className) => {

                    // Find the one that starts with 'asm-theme-' and update it if it's changed
                    if ( className.startsWith('asm-theme-') && className !== this.asmConfig.colorTheme )
                    {
                        this._document.body.classList.remove(className);
                        this._document.body.classList.add(this.asmConfig.colorTheme);
                        return;
                    }
                });
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
     * Set the layout
     */
    private _setLayout(): void
    {
        // Get the current activated route
        let route = this._activatedRoute;
        while ( route.firstChild )
        {
            route = route.firstChild;
        }

        // Get the array of paths from root
        const paths = route.pathFromRoot;

        // Iterate through the paths and change the layout as we find
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
        // way layout configuration can live anywhere within the path and
        // we won't miss it.
        //
        // Also, this will allow overriding the layout in any time so we
        // can have different layouts for different routes.
        paths.forEach((path) => {

            // Check if there is a 'layout' data
            if ( path.routeConfig && path.routeConfig.data && path.routeConfig.data.layout )
            {
                // Set the layout
                this.layout = path.routeConfig.data.layout;
            }
        });
    }
}
