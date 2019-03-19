import { animate, style, transition, trigger } from '@angular/animations';
import { AsmAnimationCurves, AsmAnimationDurations } from '@assembly/animations/defaults';

export const slideOut = trigger('slideOut',
    [

        // Top
        transition('top => void',
            [
                style({
                    transform: 'translate3d(0, 0, 0)'
                }),
                animate('{{timings}}',
                    style({
                        transform: 'translate3d(0, -100%, 0)'
                    })
                )
            ],
            {
                params: {
                    timings: `${AsmAnimationDurations.EXITING} ${AsmAnimationCurves.ACCELERATION_CURVE}`
                }
            }
        ),

        // Bottom
        transition('bottom => void',
            [
                style({
                    transform: 'translate3d(0, 0, 0)'
                }),
                animate('{{timings}}',
                    style({
                        transform: 'translate3d(0, 100%, 0)'
                    })
                )
            ],
            {
                params: {
                    timings: `${AsmAnimationDurations.EXITING} ${AsmAnimationCurves.ACCELERATION_CURVE}`
                }
            }
        ),

        // Left
        transition('left => void',
            [
                style({
                    transform: 'translate3d(0, 0, 0)'
                }),
                animate('{{timings}}',
                    style({
                        transform: 'translate3d(-100%, 0, 0)'
                    })
                )
            ],
            {
                params: {
                    timings: `${AsmAnimationDurations.EXITING} ${AsmAnimationCurves.ACCELERATION_CURVE}`
                }
            }
        ),

        // Right
        transition('right => void',
            [
                style({
                    transform: 'translate3d(0, 0, 0)'
                }),
                animate('{{timings}}',
                    style({
                        transform: 'translate3d(100%, 0, 0)'
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
