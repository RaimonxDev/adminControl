import { animate, style, transition, trigger } from '@angular/animations';
import { AsmAnimationCurves, AsmAnimationDurations } from '@assembly/animations/defaults';

// -----------------------------------------------------------------------------------------------------
// @ Slide in
// -----------------------------------------------------------------------------------------------------
const slideIn = trigger('slideIn',
    [

        // Top
        transition('void => top',
            [
                style({
                    transform: 'translate3d(0, -100%, 0)'
                }),
                animate('{{timings}}',
                    style({
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
                    transform: 'translate3d(0, 100%, 0)'
                }),
                animate('{{timings}}',
                    style({
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
                    transform: 'translate3d(-100%, 0, 0)'
                }),
                animate('{{timings}}',
                    style({
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
                    transform: 'translate3d(100%, 0, 0)'
                }),
                animate('{{timings}}',
                    style({
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

// -----------------------------------------------------------------------------------------------------
// @ Slide out
// -----------------------------------------------------------------------------------------------------
const slideOut = trigger('slideOut',
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

export { slideIn, slideOut };
