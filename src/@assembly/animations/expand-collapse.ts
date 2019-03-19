import { animate, state, style, transition, trigger } from '@angular/animations';
import { AsmAnimationCurves, AsmAnimationDurations } from '@assembly/animations/defaults';

export const expandCollapse = trigger('expandCollapse', [

    /**
     * Collapsed state
     */
    state('void, collapsed',
        style({
            height : '0',
            display: 'none'
        })
    ),

    /**
     * Expanded state
     */
    state('*, expanded',
        style('*')
    ),

    /**
     * Expand / Collapse
     */
    transition('void <=> *, collapsed <=> expanded',
        animate('{{timings}}'),
        {
            params: {
                timings: `${AsmAnimationDurations.ENTERING} ${AsmAnimationCurves.DECELERATION_CURVE}`
            }
        }
    )
]);
