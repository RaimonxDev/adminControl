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
            fadeIn        : {
                direction: 'in',
                in       : '*',
                top      : '*',
                bottom   : '*',
                left     : '*',
                right    : '*'
            },
            fadeOut       : {
                direction: 'out',
                out      : '*',
                top      : '*',
                bottom   : '*',
                left     : '*',
                right    : '*'
            },
            shake         : {
                shake: true
            },
            slideIn       : {
                direction: 'top',
                top      : '*',
                bottom   : '*',
                left     : '*',
                right    : '*'
            },
            slideOut      : {
                direction: 'top',
                top      : '*',
                bottom   : '*',
                left     : '*',
                right    : '*'
            },
            zoomIn        : {
                in: '*'
            },
            zoomOut       : {
                out: '*'
            }
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
     * @param firstState
     * @param secondState
     * @param timeout
     */
    toggleAnimationState(animation, firstState, secondState, timeout = 500): void
    {
        // Split the animation
        animation = animation.split('.');

        // Toggle the animation state
        this.animationStates[animation[0]][animation[1]] = firstState;

        setTimeout(() => {
            this.animationStates[animation[0]][animation[1]] = secondState;
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
        // Split the animation
        animation = animation.split('.');

        // Toggle the visibility status
        this.visibilityStates[animation[0]] = false;
        this.animationStates[animation[0]][animation[1]] = 'void';

        setTimeout(() => {
            this.visibilityStates[animation[0]] = true;
            this.animationStates[animation[0]][animation[1]] = '*';
        }, timeout);
    }
}
