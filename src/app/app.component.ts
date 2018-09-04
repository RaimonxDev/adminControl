import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';

import { AsmMenuService } from '@assembly/components/menu/menu.service';

import { mainMenu } from 'app/core/menu/menu';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    mainMenu: any;

    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {AsmMenuService} _asmMenuService
     * @param {Platform} _platform
     */
    constructor(
        @Inject(DOCUMENT) private document: any,
        private _asmMenuService: AsmMenuService,
        private _platform: Platform
    )
    {
        // Add 'is-mobile' class to the body if the platform is mobile
        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this.document.body.classList.add('is-mobile');
        }

        // Get default navigation
        this.mainMenu = mainMenu;

        // Register the main menu to the service
        this._asmMenuService.register('mainMenu', this.mainMenu);

        // Set the main menu as our current menu
        this._asmMenuService.setCurrentMenu('mainMenu');
    }
}
