import { animate, style, transition, trigger } from '@angular/animations';
import { AsmAnimationCurves, AsmAnimationDurations } from '@assembly/animations/defaults';

export const fadeIn = trigger('fadeIn',
    [

        // In
        transition('void => in',
            [
                style({
                    opacity: 0
                }),
                animate('{{timings}}',
                    style({
                        opacity: 1
                    })
                )
            ],
            {
                params: {
                    timings: `${AsmAnimationDurations.ENTERING} ${AsmAnimationCurves.DECELERATION_CURVE}`
                }
            }
        ),

        // Top
        transition('void => top',
            [
                style({
                    opacity  : 0,
                    transform: 'translate3d(0, -100%, 0)'
                }),
                animate('{{timings}}',
                    style({
                        opacity  : 1,
                        transform: 'translate3d(0, 0, 0)'
                    })
                )
            ],
            {
                params: {
                    timings: `${AsmAnimationDurations.ENTERING} ${AsmAnimationCurves.DECELERATION_CURVE}`
                }
            }
        ),

        // Bottom
        transition('void => bottom',
            [
                style({
                    opacity  : 0,
                    transform: 'translate3d(0, 100%, 0)'
                }),
                animate('{{timings}}',
                    style({
                        opacity  : 1,
                        transform: 'translate3d(0, 0, 0)'
                    })
                )
            ],
            {
                params: {
                    timings: `${AsmAnimationDurations.ENTERING} ${AsmAnimationCurves.DECELERATION_CURVE}`
                }
            }
        ),

        // Left
        transition('void => left',
            [
                style({
                    opacity  : 0,
                    transform: 'translate3d(-100%, 0, 0)'
                }),
                animate('{{timings}}',
                    style({
                        opacity  : 1,
                        transform: 'translate3d(0, 0, 0)'
                    })
                )
            ],
            {
                params: {
                    timings: `${AsmAnimationDurations.ENTERING} ${AsmAnimationCurves.DECELERATION_CURVE}`
                }
            }
        ),

        // Right
        transition('void => right',
            [
                style({
                    opacity  : 0,
                    transform: 'translate3d(100%, 0, 0)'
                }),
                animate('{{timings}}',
                    style({
                        opacity  : 1,
                        transform: 'translate3d(0, 0, 0)'
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
