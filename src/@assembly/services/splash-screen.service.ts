import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';

import { filter, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AsmSplashScreenService
{
    _disableAutoHide: boolean;

    private _player: AnimationPlayer;
    private _splashScreen: any;

    /**
     * Constructor
     *
     * @param {AnimationBuilder} _animationBuilder
     * @param {DOCUMENT} _document
     * @param {Router} _router
     */
    constructor(
        private _animationBuilder: AnimationBuilder,
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
        // Get the splash screen element
        this._splashScreen = this._document.body.querySelector('#asm-splash-screen');

        // If the splash screen element exists...
        if ( this._splashScreen )
        {
            // Hide it on the first NavigationEnd event
            this._router.events
                .pipe(
                    filter((event => event instanceof NavigationEnd)),
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
        this._player =
            this._animationBuilder
                .build([
                    style({
                        opacity: '0',
                        zIndex : '99999'
                    }),
                    animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', style({opacity: '1'}))
                ]).create(this._splashScreen);

        // Play the animation
        this._player.play();
    }

    /**
     * Hide the splash screen
     */
    hide(): void
    {
        this._player =
            this._animationBuilder
                .build([
                    style({opacity: '1'}),
                    animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', style({
                        opacity: '0',
                        zIndex : '-10'
                    }))
                ]).create(this._splashScreen);

        // Play the animation
        this._player.play();
    }
}
