import { Component } from '@angular/core';
import { AsmMatSidenavService } from '@assembly/directives/index';

@Component({
    selector   : 'header',
    templateUrl: './header.component.html',
    styleUrls  : ['./header.component.scss']
})
export class HeaderComponent
{
    /**
     * Constructor
     *
     * @param {AsmMatSidenavService} _asmMatSidenavHelperService
     */
    constructor(
        private _asmMatSidenavHelperService: AsmMatSidenavService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the sidenav
     *
     * @param key
     */
    toggleSidenav(key): void
    {
        // Get the sidenav
        const sidenav = this._asmMatSidenavHelperService.getSidenav(key);

        if ( sidenav )
        {
            // Toggle it
            sidenav.toggle();
        }
    }
}
