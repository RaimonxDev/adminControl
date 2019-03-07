import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector       : 'error-500',
    templateUrl    : './error-500.component.html',
    styleUrls      : ['./error-500.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Error500Component
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
