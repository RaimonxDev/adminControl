import { Component, HostBinding, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { TreoAnimations } from '@treo/animations';
import { TreoCardFace } from '@treo/components/card/card.types';

@Component({
    selector     : 'treo-card',
    templateUrl  : './card.component.html',
    styleUrls    : ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : TreoAnimations,
    exportAs     : 'treoCard'
})
export class TreoCardComponent implements OnChanges
{
    @Input() expanded = false;
    @Input() face: TreoCardFace | null = null;

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Host binding for classes
     */
    @HostBinding('class') get classList(): any
    {
        return {
            [`treo-card-expanded`]         : this.expanded,
            [`treo-card-face-${this.face}`]: this.face !== null,
            'treo-card-flippable'          : this.face !== null
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void
    {
        // Expanded
        if ( 'expanded' in changes )
        {
            // Interpret empty string as 'true'
            this.expanded = changes.expanded.currentValue === '' ? true : changes.expanded.currentValue;
        }
    }
}
