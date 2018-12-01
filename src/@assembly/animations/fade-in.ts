import { trigger, animate, style, transition } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [

    // In
    transition('void => *, false => true', [
        style({
            opacity: 0
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            opacity: 1
        }))
    ]),

    // Top
    transition('void => top, false => top', [
        style({
            opacity  : 0,
            transform: 'translateY(-100%)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            opacity  : 1,
            transform: 'translateY(0)'
        }))
    ]),

    // Right
    transition('void => right, false => right', [
        style({
            opacity  : 0,
            transform: 'translateX(100%)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            opacity  : 1,
            transform: 'translateX(0)'
        }))
    ]),

    // Bottom
    transition('void => bottom, false => bottom', [
        style({
            opacity  : 0,
            transform: 'translateY(100%)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            opacity  : 1,
            transform: 'translateY(0)'
        }))
    ]),

    // Left
    transition('void => left, false => left', [
        style({
            opacity  : 0,
            transform: 'translateX(-100%)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            opacity  : 1,
            transform: 'translateX(0)'
        }))
    ])

]);
