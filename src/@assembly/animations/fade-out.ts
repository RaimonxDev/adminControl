import { trigger, animate, style, transition } from '@angular/animations';

export const fadeOut = trigger('fadeOut', [

    // Out
    transition('out => void, out => false', [
        style({
            opacity: 1
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            opacity: 0
        }))
    ]),

    // Top
    transition('top => void, top => false', [
        style({
            opacity: 1,
            transform: 'translateY(0)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            opacity: 0,
            transform: 'translateY(-100%)'
        }))
    ]),

    // Right
    transition('right => void, right => false', [
        style({
            opacity: 1,
            transform: 'translateX(0)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            opacity: 0,
            transform: 'translateX(100%)'
        }))
    ]),

    // Bottom
    transition('bottom => void, bottom => false', [
        style({
            opacity: 1,
            transform: 'translateY(0)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            opacity: 0,
            transform: 'translateY(100%)'
        }))
    ]),

    // Left
    transition('left => void, left => false', [
        style({
            opacity: 1,
            transform: 'translateX(0)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            opacity: 0,
            transform: 'translateX(-100%)'
        }))
    ])

]);
