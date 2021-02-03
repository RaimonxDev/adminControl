import { Component } from '@angular/core';
import { TreoDrawerMode, TreoDrawerService } from '@treo/components/drawer';

@Component({
    selector   : 'drawer',
    templateUrl: './drawer.component.html',
    styles     : ['']
})
export class DrawerComponent
{
    drawerMode: TreoDrawerMode;

    /**
     * Constructor
     */
    constructor(private _treoDrawerService: TreoDrawerService)
    {
        // Set the defaults
        this.drawerMode = 'side';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer mode
     *
     * @param name
     */
    toggleDrawerMode(name: string): void
    {
        const drawer = this._treoDrawerService.getComponent(name);

        if ( drawer )
        {
            drawer.mode = drawer.mode === 'side' ? 'over' : 'side';
        }
    }

    /**
     * Toggle the drawer open
     *
     * @param name
     */
    toggleDrawerOpen(name: string): void
    {
        const drawer = this._treoDrawerService.getComponent(name);

        if ( drawer )
        {
            drawer.toggle();
        }
    }
}
