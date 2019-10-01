import { Component, ViewEncapsulation } from '@angular/core';
import { AsmAnimations } from '@assembly/animations/public-api';

@Component({
    selector     : 'asm-card-expansion-panel',
    templateUrl  : './expansion-panel.component.html',
    styles       : [''],
    encapsulation: ViewEncapsulation.None,
    animations   : AsmAnimations,
    exportAs     : 'asmCardExpansionPanel'
})
export class AsmCardExpansionPanelComponent
{
    expanded: boolean;

    /**
     * Constructor
     */
    constructor()
    {
        this.expanded = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Expand the details
     */
    expand(): void
    {
        this.expanded = true;
    }

    /**
     * Collapse the details
     */
    collapse(): void
    {
        this.expanded = false;
    }

    /**
     * Toggle the expand/collapse status
     */
    toggle(): void
    {
        this.expanded = !this.expanded;
    }

}
