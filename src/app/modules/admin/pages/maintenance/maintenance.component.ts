import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector       : 'maintenance',
    templateUrl    : './maintenance.component.html',
    styleUrls      : ['./maintenance.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaintenanceComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
