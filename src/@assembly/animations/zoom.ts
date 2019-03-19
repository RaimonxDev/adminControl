import { animate, style, transition, trigger } from '@angular/animations';
import { AsmAnimationCurves, AsmAnimationDurations } from '@assembly/animations/defaults';

// -----------------------------------------------------------------------------------------------------
// @ Zoom in
// -----------------------------------------------------------------------------------------------------
const zoomIn = trigger('zoomIn',
    [

        // In
        transition('void => *',
            [
                style({
                    opacity  : 0,
                    transform: 'scale(0.5)'
                }),
                animate('{{timings}}',
                    style({
                        opacity  : 1,
                        transform: 'scale(1)'
                    })
                )
            ],
            {
                params: {
                    timings: `${AsmAnimationDurations.ENTERING} ${AsmAnimationCurves.DECELERATION_CURVE}`
                }
            }
        )
    ]
);

// -----------------------------------------------------------------------------------------------------
// @ Zoom out
// -----------------------------------------------------------------------------------------------------
const zoomOut = trigger('zoomOut',
    [

        // Out
        transition('* => void',
            [
                style({
                    opacity  : 1,
                    transform: 'scale(1)'
                }),
                animate('{{timings}}',
                    style({
                        opacity  : 0,
                        transform: 'scale(0.5)'
                    })
                )
            ],
            {
                params: {
                    timings: `${AsmAnimationDurations.EXITING} ${AsmAnimationCurves.ACCELERATION_CURVE}`
                }
            }
        )
    ]
);

export { zoomIn, zoomOut };

