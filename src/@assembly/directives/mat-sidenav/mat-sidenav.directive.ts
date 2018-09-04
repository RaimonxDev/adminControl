import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { AsmMatSidenavService } from '@assembly/directives/mat-sidenav/mat-sidenav.service';

@Directive({
    selector: '[asmMatSidenav]'
})
export class AsmMatSidenavDirective implements OnInit, OnDestroy
{
    // Key
    @Input()
    asmMatSidenav: string;

    /**
     * Constructor
     *
     * @param {AsmMatSidenavService} _asmMatSidenavService
     * @param {MatSidenav} _matSidenav
     */
    constructor(
        private _asmMatSidenavService: AsmMatSidenavService,
        private _matSidenav: MatSidenav
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Register the sidenav
        this._asmMatSidenavService.registerSidenav(this.asmMatSidenav, this._matSidenav);
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Delete the sidenav
        this._asmMatSidenavService.deleteSidenav(this.asmMatSidenav);
    }
}

