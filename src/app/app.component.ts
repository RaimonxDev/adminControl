import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { MatIconRegistry } from '@angular/material/icon';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AsmConfig, AsmConfigService, AsmNavigationService } from '@assembly';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{
    asmConfig: AsmConfig;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmNavigationService} _asmNavigationService
     * @param {AsmConfigService} _asmConfigService
     * @param {DOCUMENT} _document
     * @param {MatIconRegistry} _matIconRegistry
     * @param {Platform} _platform
     */
    constructor(
        private _asmNavigationService: AsmNavigationService,
        private _asmConfigService: AsmConfigService,
        @Inject(DOCUMENT)
        private _document: any,
        private _matIconRegistry: MatIconRegistry,
        private _platform: Platform
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

                    // Find the one that starts with 'asm-theme-'
                    // and update it if it's changed
                    if ( className.startsWith('asm-theme-') && className !== this.asmConfig.colorTheme )
                    {
                        // Remove the old class name
                        this._document.body.classList.remove(className);

                        // Add the new one
                        this._document.body.classList.add(this.asmConfig.colorTheme);

                        return;
                    }
                });
            });

        // Add 'is-mobile' class to the body if the platform is mobile
        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this._document.body.classList.add('is-mobile');
        }

        // Change the default mat-icon font class
        this._matIconRegistry.setDefaultFontSetClass('material-outline-icons');
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
