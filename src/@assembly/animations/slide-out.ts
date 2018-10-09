import { trigger, animate, style, transition } from '@angular/animations';

export const slideOut = trigger('slideOut', [

    // Top
    transition('top => void, top => false', [
        style({
            transform: 'translateY(0)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            transform: 'translateY(-100%)'
        }))
    ]),

    // Right
    transition('right => void, right => false', [
        style({
            transform: 'translateX(0)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            transform: 'translateX(100%)'
        }))
    ]),

    // Bottom
    transition('bottom => void, bottom => false', [
        style({
            transform: 'translateY(0)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            transform: 'translateY(100%)'
        }))
    ]),

    // Left
    transition('left => void, left => false', [
        style({
            transform: 'translateX(0)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            transform: 'translateX(-100%)'
        }))
    ])

]);
