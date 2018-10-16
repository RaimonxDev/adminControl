import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';

import { AsmNavigationService } from '@assembly/components/navigation/navigation.service';

import { defaultNavigation } from 'app/core/navigation/default';
import { compactNavigation } from 'app/core/navigation/compact';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {AsmNavigationService} _asmNavigationService
     * @param {Platform} _platform
     */
    constructor(
        @Inject(DOCUMENT) private document: any,
        private _asmNavigationService: AsmNavigationService,
        private _platform: Platform
    )
    {
        // Add 'is-mobile' class to the body if the platform is mobile
        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this.document.body.classList.add('is-mobile');
        }

        // Register the navigation to the service
        this._asmNavigationService.register('defaultNavigation', defaultNavigation);
        this._asmNavigationService.register('compactNavigation', compactNavigation);
    }
}
