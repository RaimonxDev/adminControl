import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AsmSplashScreenService
{
    _disableAutoHide: boolean;

    /**
     * Constructor
     *
     * @param {DOCUMENT} _document
     * @param {Router} _router
     */
    constructor(
        @Inject(DOCUMENT) private _document: any,
        private _router: Router
    )
    {
        // Set the private defaults
        this._disableAutoHide = false;

        // Initialize
        this._init();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @private
     */
    private _init(): void
    {
        // Hide it on the first NavigationEnd event
        this._router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {

                // Return, if the auto hide is disabled
                if ( this._disableAutoHide )
                {
                    return;
                }

                // Hide the splash screen
                this.hide();
            });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Disables the auto hide on first NavigationEnd event
     * In order this to work, the method must be triggered
     * before the first event.
     */
    disableAutoHide(): void
    {
        this._disableAutoHide = true;
    }

    /**
     * Show the splash screen
     */
    show(): void
    {
        this._document.body.classList.remove('asm-splash-screen-hidden');
        this._document.body.classList.add('asm-splash-screen-visible');
    }

    /**
     * Hide the splash screen
     */
    hide(): void
    {
        this._document.body.classList.remove('asm-splash-screen-visible');
        this._document.body.classList.add('asm-splash-screen-hidden');
    }
}
