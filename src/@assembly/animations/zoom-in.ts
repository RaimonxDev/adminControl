import { animate, style, transition, trigger } from '@angular/animations';
import { AsmAnimationCurves, AsmAnimationDurations } from '@assembly/animations/defaults';

export const zoomIn = trigger('zoomIn',
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

    ]);
