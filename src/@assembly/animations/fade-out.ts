import { animate, style, transition, trigger } from '@angular/animations';
import { AsmAnimationCurves, AsmAnimationDurations } from '@assembly/animations/defaults';

export const fadeOut = trigger('fadeOut',
    [

        // Out
        transition('out => void',
            [
                style({
                    opacity: 1
                }),
                animate('{{timings}}',
                    style({
                        opacity: 0
                    })
                )
            ],
            {
                params: {
                    timings: `${AsmAnimationDurations.EXITING} ${AsmAnimationCurves.ACCELERATION_CURVE}`
                }
            }
        ),

        // Top
        transition('top => void',
            [
                style({
                    opacity  : 1,
                    transform: 'translate3d(0, 0, 0)'
                }),
                animate('{{timings}}',
                    style({
                        opacity  : 0,
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
                    opacity  : 1,
                    transform: 'translate3d(0, 0, 0)'
                }),
                animate('{{timings}}',
                    style({
                        opacity  : 0,
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
                    opacity  : 1,
                    transform: 'translate3d(0, 0, 0)'
                }),
                animate('{{timings}}',
                    style({
                        opacity  : 0,
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
                    opacity  : 1,
                    transform: 'translate3d(0, 0, 0)'
                }),
                animate('{{timings}}',
                    style({
                        opacity  : 0,
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
