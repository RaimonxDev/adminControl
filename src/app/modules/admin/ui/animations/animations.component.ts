import { Component, ViewEncapsulation } from '@angular/core';
import { AsmAnimations } from '@assembly';

@Component({
    selector     : 'animations',
    templateUrl  : './animations.component.html',
    styleUrls    : ['./animations.component.scss'],
    animations   : AsmAnimations,
    encapsulation: ViewEncapsulation.None
})
export class AnimationsComponent
{
    animationStates: any;
    visibilityStates: any;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.animationStates = {
            expandCollapse: 'expanded',
            fadeIn        : 'in',
            fadeOut       : 'out',
            shake         : true,
            slideIn       : 'top',
            slideOut      : 'top',
            zoomIn        : true,
            zoomOut       : true
        };

        this.visibilityStates = {
            expandCollapse: true,
            fadeIn        : true,
            fadeOut       : true,
            shake         : true,
            slideIn       : true,
            slideOut      : true,
            zoomIn        : true,
            zoomOut       : true
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle animation state
     *
     * @param animation
     * @param timeout
     */
    toggleAnimationState(animation, firstState, secondState, timeout = 500): void
    {
        // Toggle the animation state
        this.animationStates[animation] = firstState;

        setTimeout(() => {
            this.animationStates[animation] = secondState;
        }, timeout);
    }

    /**
     * Toggle visibility state
     *
     * @param animation
     * @param timeout
     */
    toggleVisibilityState(animation, timeout = 500): void
    {
        // Toggle the visibility status
        this.visibilityStates[animation] = false;

        setTimeout(() => {
            this.visibilityStates[animation] = true;
        }, timeout);
    }
}
