import { trigger, animate, style, transition } from '@angular/animations';

export const slideIn = trigger('slideIn', [

    // Top
    transition('void => top, false => top', [
        style({
            transform: 'translateY(-100%)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            transform: 'translateY(0)'
        }))
    ]),

    // Right
    transition('void => right, false => right', [
        style({
            transform: 'translateX(100%)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            transform: 'translateX(0)'
        }))
    ]),

    // Bottom
    transition('void => bottom, false => bottom', [
        style({
            transform: 'translateY(100%)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            transform: 'translateY(0)'
        }))
    ]),

    // Left
    transition('void => left, false => left', [
        style({
            transform: 'translateX(-100%)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            transform: 'translateX(0)'
        }))
    ])

]);
